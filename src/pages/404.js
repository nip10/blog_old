import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
        </div>
      </div>
    </div>
    <Link className="btn btn-primary text-uppercase" to={'/'}>
      Go home
    </Link>
  </Layout>
);

export default NotFoundPage;
