import termios
import tty
import time
import sys

from contextlib import contextmanager
import signal


@contextmanager
def raw_read():
    """Enable Non-blocking single character read"""

    class RawReadCtrlChar(Exception): pass
    class  RawReader():
        def getch(self):
            termios.tcflush(sys.stdin, termios.TCIOFLUSH)
            c = sys.stdin.read(1)
            if c in ("\03", "\04", "\1a"): # break on ctrl-c, d or z
                raise RawReadCtrlChar(c) 
            return c

    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        yield RawReader()
    except RawReadCtrlChar as ex:
        if str(ex) == "\1a": raise signal.SIGSTP
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)

timings = []
start = time.time()
word = ""
with raw_read() as raw:
  while word != "welcome":
    c = raw.getch()
    word += c
    timings.append(time.time())


first = timings[0]
last = timings[-1]

timings.insert(0, start)

# Relativize timings from the first to CSS animation percentages
timings = [(t - first) / (last - first) * 100 for t in timings]

total_time = last - start
print(f"Total time: {total_time:.2f}s")

# Print CSS animation keyframes
print("@keyframes type_welcome {")
for i, t in enumerate(timings):
    if i == 0: continue
    print(f"    {t:.2f}% {{ content: '{word[:i]}'; }}")
print("}")
