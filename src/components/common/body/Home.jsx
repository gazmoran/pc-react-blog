import { Container } from "react-bootstrap";
import useFetch from "../../../useFetch";
import BlogList from "./BlogList";
const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blog');

    return (
        <section>
            <Container className="mb-5">
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                { blogs && <BlogList blogs={blogs} title="All Articles" /> }
                { blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === 'Someone Else')} title="Someone Elses Articles" /> }
            </Container>
        </section>
    );
}

export default Home;