import time
import sys

timings = []
start = time.time()
word = ""
while True:
    c = sys.stdin.read(1)
    if word == "welcome":
        break
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
    print(f"    {t:.2f}% {{ content: '{word[:i]}'; }}")
print("}")
