import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/Section';
import EquipmentBlock from '../components/EquipmentBlock';
import Rate from '../components/Rate';

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import BlockContent from '@sanity/block-content-to-react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

const IndexPage = () => {
  const { sanitySiteSettings, sanityHomepage } = useStaticQuery(graphql`
    {
      sanitySiteSettings {
        address
        email
        phone
      }
      sanityHomepage {
        dividerImage1 {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        dividerImage2 {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        dividerImage3 {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        dividerImage4 {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        dividerImage5 {
          alt
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
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
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        equipmentSection {
          sectionTitle
          consoleImage {
            alt
            asset {
              fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
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
        rates {
          title
        }
        _rawRates
      }
    }
  `);

  const section1 = {
    title: sanityHomepage._rawSection1.title,
    body: sanityHomepage._rawSection1.section_text,
  };

  return (
    <Layout>
      <SEO title="Home" />

      <Img
        fluid={sanityHomepage.dividerImage1.asset.fluid}
        alt={sanityHomepage.dividerImage1.alt}
        className="divider-image"
      />

      <Section id="about" title={section1.title}>
        <BlockContent blocks={section1.body} />
      </Section>

      <Img
        fluid={sanityHomepage.dividerImage2.asset.fluid}
        alt={sanityHomepage.dividerImage2.alt}
        className="divider-image"
      />

      <Section id="tour" title={sanityHomepage.tour.title} fullWidth>
        <BlockContent blocks={sanityHomepage._rawTour.introText} />
        <Gallery images={sanityHomepage.tour.galleryImages} />
      </Section>

      <Section
        id="equipment"
        title={sanityHomepage.equipmentSection.sectionTitle}
      >
        <h3>Console</h3>
        <div className="d-flex justify-space-between">
          <div className="w-45">
            <BlockContent
              blocks={sanityHomepage._rawEquipmentSection.consoleDescription}
            />
          </div>
          <div className="w-45">
            <Img
              fluid={sanityHomepage.equipmentSection.consoleImage.asset.fluid}
              alt={sanityHomepage.equipmentSection.consoleImage.alt}
            />
          </div>
        </div>

        {sanityHomepage.equipmentSection.equipmentGroups.map((group) => {
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

      <Img
        fluid={sanityHomepage.dividerImage4.asset.fluid}
        alt={sanityHomepage.dividerImage4.alt}
        className="divider-image"
      />

      <Section id="rates" title={sanityHomepage.rates.title}>
        <table>
          <thead className="sr-only">
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {sanityHomepage._rawRates.rates.map(
              ({ _key, title, price, subtext }) => (
                <Rate key={_key} desc={title} cost={price} note={subtext} />
              )
            )}
          </tbody>
        </table>

        <BlockContent blocks={sanityHomepage._rawRates.ratesConditions} />
      </Section>

      <Img
        fluid={sanityHomepage.dividerImage5.asset.fluid}
        alt={sanityHomepage.dividerImage5.alt}
        className="divider-image"
      />

      <Section id="contact" title="Contact us">
        <dl>
          <div className="d-flex">
            <dt>
              <RoomIcon />
            </dt>
            <dd>{sanitySiteSettings.address}</dd>
          </div>
          <div className="d-flex">
            <dt>
              <PhoneIcon />
            </dt>
            <dd>
              <a href="tel://+353749119830">{sanitySiteSettings.phone}</a>
            </dd>
          </div>
          <div className="d-flex">
            <dt>
              <EmailIcon />
            </dt>
            <dd>
              <a href={`mailto:${sanitySiteSettings.email}`}>
                {sanitySiteSettings.email}
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
