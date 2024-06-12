import React from "react";
import './Blog.css';
import BestCloud from '../../Assets/img/Best-Cloud-Hosting-Services-300x150.jpg';
import BestAutomation from '../../Assets/img/Best-Automation-Testing-Software-for-Todays-Testers-300x150.jpg';
import BestLinkedin from '../../Assets/img/Best-LinkedIn-Alternatives-for-Professional-Networking-300x150.jpg';
import Unveiling from '../../Assets/img/Unveiling-the-300x150.jpg';
import DetailedGuide from '../../Assets/img/Detailed-Guide-300x150.jpg';
import RolesAnd from '../../Assets/img/Roles-and300x150.jpg';

function Blog() {
    return (
        <div>
            <div id="content" className="site-content">
                <div id="content-inside" className="container right-sidebar">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main" role="main">
                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={BestCloud} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>Cloud hosting services will have changed dramatically by 2024, providing companies with previously unheard-of levels of scalability, security, and flexibility. Choosing the ideal hosting provider becomes essential for maximizing performance...</p>
                                    </div>
                                </div>
                            </article>

                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={BestAutomation} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>To guarantee the effectiveness and dependability of their operations in the hectic development environment of today, testers need strong automated software testing tools. In addition to improving accuracy, lowering manual …</p>
                                    </div>
                                </div>
                            </article>

                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={BestLinkedin} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>In the realm of technological advancement, LinkedIn has served the world in the best way. This platform, actually a professional platform, has turned out to be greatly useful for people …</p>
                                    </div>
                                </div>
                            </article>

                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={Unveiling} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>Among the many builders of digital innovation in the ever-changing tech scene of today are Full Stack Developers. Their skill covers the whole range of web development, fusing backend expertise …</p>
                                    </div>
                                </div>
                            </article>

                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={DetailedGuide} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>The STLC provides a basic structure for guaranteeing the dependability and quality of software products in the ever-changing field of software development. The STLC is essential to keeping development cycles …</p>
                                     </div>
                                </div>
                            </article>

                            <article className="list-article clearfix post">
                                <div className="list-article-thumb">
                                        <img src={RolesAnd} alt="bestcloud"/>
                                </div>
                                <div className="list-article-content">
                                    <div className="list-article-meta">
                                        <p>Software / Tech</p>
                                    </div>
                                    <header className="entry-header">
                                        <h2 className="entry-title">7 Best Cloud Hosting Services in 202</h2>
                                    </header>
                                    <div className="entry-excerpt">
                                        <p>The STLC provides a basic structure for guaranteeing the dependability and quality of software products in the ever-changing field of software development. The STLC is essential to keeping development cycles …</p>
                                     </div>
                                </div>
                            </article>

                        </main>
                    </div>

                    <div id="secondary" className="widget-area sidebar" role="complementary">
                        <aside className="widget widget_search">
                                <label className="search-label">Search</label>
                                <div className="search-wrapper">
                                    <input type="search"  className="search-input" placeholder="Search blog..." />
                                    <button type="submit" className="search-button">Search</button>
                                </div>
                        </aside>
                        <aside className="widget widget_recent_entries">
                            <h4>Recent Posts</h4>
                            <ul>
                                <li>7 Best Cloud Hosting Services in 2024</li>
                                <li>10 Best Automation Testing Software for Today’s Testers</li>
                                <li>7 Best LinkedIn Alternatives for Professional Networking in 2024</li>
                                <li>Roles and Responsibilities of Full Stack Developers: Unveiling the Versatility</li>
                                <li>Detailed Guide On Software Testing Life Cycle (STLC) in Agile</li>
                            </ul>
                        </aside>
                        <aside className="widget widget_trending_posts">
                            <h2>Trending Posts</h2>
                            <ul>
                                <li>Strengths and Weaknesses of Quantitative and Qualitative Research</li>
                                <li>24 Best ChatGPT Alternatives You Can Use in 2024 [Updated]</li>
                                <li>Roles and Responsibilities of DBA (Database Administrator)</li>
                                <li>Which is The Best Android TV OS or Tizen TV OS?</li>
                                <li>What are the Advantages of ChatGPT?</li>
                            </ul>
                        </aside>
                        <aside className="widget widget_trending_post">
                            <h2 style={{color:'black'}}>Categories</h2>
                            <ul>
                                <li>Android</li>
                                <li>Apple</li>
                                <li>App Development</li>
                                <li>Artificial</li>
                                <li>Intelligence</li>
                                <li>Blockchain</li>
                                <li>Business</li>
                                <li>Data Science</li>
                                <li>Mobile Apps</li>
                                <li>Web Development</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </aside>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Blog;
