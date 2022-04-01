import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import TeamSection from '../components/TeamSection';

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Code Master 2022"
        description="Rising Stars Challenge - Code Master 2022"
      />
      <TeamSection />
    </Layout>
  );
}
