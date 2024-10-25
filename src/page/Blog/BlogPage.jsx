import OurBlog from 'components/OurBlog/OurBlog';
import './blogPage.css'
import SevenRulesBlog from 'components/OurBlog/SevenRulesBlog/SevenRulesBlog';

const BlogPage = () => {
    return (
        <section className="blog-section">
            <OurBlog />
            <SevenRulesBlog/>
        </section>
    )
};

export default BlogPage;