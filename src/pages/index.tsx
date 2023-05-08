import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/Section';
import EquipmentBlock from '../components/EquipmentBlock';
import Rate from '../components/Rate';

import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { PortableText } from '@PortableText/react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

export const query = graphql`
  {
    sanitySiteSettings {
      address
      email
      phone
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    sanityHomepage {
      splashImage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, breakpoints: [1200])
        }
      }
      dividerImage1 {
        alt
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dividerImage2 {
        alt
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dividerImage3 {
        alt
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dividerImage4 {
        alt
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      _rawSection1
      _rawTour
      tour {
        title
        galleryImages {
          _key
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      equipmentSection {
        sectionTitle
        consoleImage {
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH, breakpoints: [600, 800, 1000])
          }
        }
        equipmentGroups {
          _key
          open_by_default
          title
          equipmentItems {
            _key
            title
          }
        }
      }
      _rawEquipmentSection
      _rawAccommodation
      accommodation {
        galleryImages {
          _key
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      _rawBio
      bio {
        enableSection
        bioImage {
          alt
          asset {
            gatsbyImageData(layout: FULL_WIDTH, breakpoints: [600, 800, 1000])
          }
        }
      }
      rates {
        title
      }
      _rawRates
      faqs {
        groupTitle
        questions {
          quesiton
          answer
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout
      headerImage={data.sanityHomepage.splashImage.asset}
      siteTitle={data.site.siteMetadata.title}
    >
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description || ''}
      />

      <Section id="about" title={data.sanityHomepage._rawSection1.title}>
        <PortableText value={data.sanityHomepage._rawSection1.section_text} />
      </Section>

      <GatsbyImage
        image={data.sanityHomepage.dividerImage1.asset.gatsbyImageData}
        alt={data.sanityHomepage.dividerImage1.alt}
        className="divider-image"
      />

      <Section id="tour" title={data.sanityHomepage.tour.title} fullWidth>
        <PortableText value={data.sanityHomepage._rawTour.introText} />
        <Gallery images={data.sanityHomepage.tour.galleryImages} />
      </Section>

      <Section
        id="equipment"
        title={data.sanityHomepage.equipmentSection.sectionTitle}
      >
        <h3>Console</h3>
        <div className="d-flex justify-space-between">
          <div className="w-45">
            <PortableText
              value={
                data.sanityHomepage._rawEquipmentSection.consoleDescription
              }
            />
          </div>
          <div className="w-45">
            <GatsbyImage
              image={
                data.sanityHomepage.equipmentSection.consoleImage.asset
                  .gatsbyImageData
              }
              alt={data.sanityHomepage.equipmentSection.consoleImage.alt}
            />
          </div>
        </div>

        {data.sanityHomepage.equipmentSection.equipmentGroups.map((group) => {
          return (
            <EquipmentBlock
              key={group._key}
              title={group.title}
              open={group.open_by_default}
            >
              <ul>
                {group.equipmentItems.map((item) => (
                  <li key={item._key}>{item.title}</li>
                ))}
              </ul>
            </EquipmentBlock>
          );
        })}
      </Section>

      <GatsbyImage
        image={data.sanityHomepage.dividerImage2.asset.gatsbyImageData}
        alt={data.sanityHomepage.dividerImage2.alt}
        className="divider-image"
      />

      {data.sanityHomepage._rawAccommodation.enableSection && (
        <Section
          id="accommodation"
          className="pb-0"
          title={data.sanityHomepage._rawAccommodation.title}
          fullWidth
        >
          <PortableText
            value={data.sanityHomepage._rawAccommodation.introText}
          />
          <Gallery images={data.sanityHomepage.accommodation.galleryImages} />
        </Section>
      )}

      <Section id="rates" title={data.sanityHomepage.rates.title}>
        <table>
          <thead className="sr-only">
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {data.sanityHomepage._rawRates.rates.map(
              ({ _key, title, price, subtext }) => (
                <Rate key={_key} desc={title} cost={price} note={subtext} />
              )
            )}
          </tbody>
        </table>

        <PortableText value={data.sanityHomepage._rawRates.ratesConditions} />
      </Section>

      <GatsbyImage
        image={data.sanityHomepage.dividerImage3.asset.gatsbyImageData}
        alt={data.sanityHomepage.dividerImage3.alt}
        className="divider-image"
      />

      {data.sanityHomepage._rawBio.enableSection && (
        <Section
          id="bio"
          title={data.sanityHomepage._rawBio.sectionTitle}
          className="pb-0"
        >
          <div className="d-flex justify-space-between">
            <div className="w-45">
              <GatsbyImage
                image={data.sanityHomepage.bio.bioImage.asset.gatsbyImageData}
                alt={data.sanityHomepage.bio.bioImage.alt}
              />
            </div>
            <div className="w-45">
              <PortableText value={data.sanityHomepage._rawBio.bio} />
            </div>
          </div>
        </Section>
      )}

      <Section id="faqs" title="FAQs">
        {data.sanityHomepage.faqs.map((group, i) => {
          return (
            <EquipmentBlock
              key={i}
              title={group.groupTitle}
              open={group.open_by_default}
              className="pb-1"
            >
              {group.questions.map((item, i) => (
                <div key={i} className="pl-1 pr-1">
                  <h4>{item.quesiton}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </EquipmentBlock>
          );
        })}
      </Section>

      <GatsbyImage
        image={data.sanityHomepage.dividerImage4.asset.gatsbyImageData}
        alt={data.sanityHomepage.dividerImage4.alt}
        className="divider-image"
      />

      <Section id="contact" title="Contact us">
        <dl>
          <div className="d-flex">
            <dt>
              <PlaceIcon />
            </dt>
            <dd>{data.sanitySiteSettings.address}</dd>
          </div>
          <div className="d-flex">
            <dt>
              <PhoneIcon />
            </dt>
            <dd>
              <a href="tel://+353749119830">{data.sanitySiteSettings.phone}</a>
            </dd>
          </div>
          <div className="d-flex">
            <dt>
              <EmailIcon />
            </dt>
            <dd>
              <a href={`mailto:${data.sanitySiteSettings.email}`}>
                {data.sanitySiteSettings.email}
              </a>
            </dd>
          </div>
        </dl>
      </Section>
      <div className="map">
        <Map center={{ lat: 55.047627, lng: -7.842703 }} zoom={12} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
