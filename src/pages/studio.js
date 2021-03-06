import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Waves from "../components/waves";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import MoovingLetters from "../components/moovingLetters";
import { useTranslation } from "react-i18next";
import StudioCard from "../components/atoms/StudioCard";

function Studio() {
  const { t } = useTranslation(["studio", "SEO"]);

  const points = [
    {
      heading: t("studio:pointOne"),
      text: t("studio:textOne"),
    },
    {
      heading: t("studio:pointTwo"),
      text: t("studio:textTwo"),
    },
    {
      heading: t("studio:pointThree"),
      text: t("studio:textThree"),
    },
    {
      heading: t("studio:pointFour"),
      text: t("studio:textFour"),
    },
    {
      heading: t("studio:pointFive"),
      text: t("studio:textFive"),
    },
    {
      heading: t("studio:pointSix"),
      text: t("studio:textSix"),
    },
    {
      heading: t("studio:pointSeven"),
      text: t("studio:textSeven"),
    },
    {
      heading: t("studio:pointEight"),
      text: t("studio:textEight"),
    },
  ];

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-studio.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={t("SEO:studio.title")}
        keywords={t("SEO:keywords").split(",")}
        description={t("SEO:description")}
        lang={t("SEO:lang")}
        pathname="/studio"
      />

      <BackgroundImage
        className="min-h-screen flex"
        Tag="section"
        fluid={image.sharp.fluid}
        id="studio-hero"
        durationFadeIn={200}
        loading="eager"
      >
        <div className="self-center max-w-80 w-full px-6 sm:px-10 lg:px-16 sm:text-center -mt-12 sm:mt-0">
          <MoovingLetters
            className="font-bold text-5xl md:text-6xl leading-none"
            text={t("studio:pageHeading")}
          />
          <MoovingLetters
            className="text-base text-gray-500 mt-3 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl mx-auto"
            text={t("studio:pageHeadingText")}
          />
        </div>
      </BackgroundImage>

      <section className="bg-coolGray-050 px-6 sm:px-10 lg:px-16 text-coolGray-900 flex">
        <div className="max-w-80 self-center py-16 sm:py-20 xxl:py-24">
          <h2 className="text-5xl sm:text-4xl sm:text-center mb-16 sm:mb-20 xxl:mb-24 font-bold">
            {t("studio:workHeading")}
          </h2>
          <div id="points" className="flex flex-wrap max-w-5xl">
            {points.map((i) => (
              <StudioCard key={i.heading} heading={i.heading} text={i.text} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="px-6 sm:px-10 lg:px-16 bg-coolGray-100"
      >
        <div className=" max-w-80 mx-auto flex flex-col justify-center py-16 sm:py-20 xxl:py-24">
          <div className="flex text-coolGray-800 justify-center items-center">
            <Link
              to="/contact"
              className="text-2xl font-bold h-fit sm:leading-none"
            >
              {t("studio:actionText")}
            </Link>
            <Link to="/contact" className="ml-4 ">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
              >
                <g fill="none" fillRule="evenodd">
                  <circle fill="#5966D9" cx="12" cy="12" r="12" />
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: "translate(10%, 10%) scale(0.8, 0.8)" }}
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Waves />
    </Layout>
  );
}

export default Studio;
