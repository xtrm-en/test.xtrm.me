import LandingIntro from "../components/index/LandingIntro";
import PostsListing from "../components/index/PostsListing";
import ProjectsListing from "../components/index/ProjectsListing";

export default function Page() {
    return (
        <>
            <LandingIntro/>
            <PostsListing />
            <ProjectsListing />
        </>
    )
}