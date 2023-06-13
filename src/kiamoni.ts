import { KiamoniTemplateType } from "../types";
import {
  KiamoniBlock1,
  KiamoniBlock2,
  KiamoniBlock3,
  KiamoniBlock4,
  KiamoniBlock10,
  KiamoniBlock12,
  KiamoniBlock11,
  KiamoniBlock7,
  KiamoniBlock6,
  KiamoniBlock5,
  KiamoniBlock8,
  KiamoniBlock15,
  KiamoniBlock17,
} from "./Blocks";

export const useGetKiamoniBlocks = () => {
  const kiamoniBlockLayouts = {
    layout1: "layout-1",
    layout2: "layout-2",
    layout3: "layout-3",
    layout4: "layout-4",
    layout5: "layout-5",
    layout6: "layout-6",
  };

  const kiamoniBlockAnimations = {
    animation1: "animation-1",
    animation2: "animation-2",
    animation3: "animation-3",
    animation4: "animation-4",
    animation5: "animation-5",
    animation6: "animation-6",
  };

  return (): KiamoniTemplateType[] => [
    {
      name: "kiamoni-block-1",
      component: KiamoniBlock1,
      props: {
        content: {
          links: [
            { text: "Home", url: "#" },
            { text: "Menus", url: "/menus" },
            { text: "Wishlist", url: "/wishlist" },
            { text: "Blog", url: "/blog" },
            { text: "About Us", url: "/about" },
            { text: "Contact", url: "/contact" },
          ],
          icons: [
            { name: "favorite", url: "/favorite" },
            { name: "wishlist", url: "/wishlist", count: "10" },
          ],
          image: {
            src: "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni.svg",
            url: "#",
            alt: "Kiamoni logo",
          },
          buttons: [
            {
              text: "Order Now",
              url: "/order",
            },
          ],
        },
        configuration: {
          colors: {
            main: {
              "100": "primary.main",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "secondary.main",
              "500": "neutral.500",
              "600": "neutral.700",
              "700": "error.100",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
            },
          },
          fonts: {
            heading: "",
            body: "Montserrat",
            misc: "",
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: "kiamoni-block-2",
      component: KiamoniBlock2,
      props: {
        content: {
          text: {
            heading: "Instagram",
            description:
              "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            brandName: "kiamonifoods",
          },
          instagramImages: [
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(1).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(2).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(3).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(4).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(5).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(6).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(7).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(8).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(9).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(10).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(11).png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(12).png",
          ],
        },
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "secondary.300",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: "kiamoni-block-3",
      component: KiamoniBlock3,
      props: {
        content: {
          text: {
            main: "Join our weekly digest",
            body: "Get exclusive promotions & updates straight to your inbox.",
            extra: "Where every bite is a story",
          },
          image:
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni+(2).svg",
          schedule: [
            { day: "Mon - Sat", time: "11:30AM - 8:30PM" },
            { day: "Sun", time: "5:30AM - 8:30AM" },
          ],
          client: {
            type: "emailjs",
            credentials: {
              service_id: "service_e0r79wm",
              template_id: "template_1qe38gr",
              user_id: "_h6kVofH7LYFXtlsI",
            },
          },
          footerLinks: [
            {
              name: "Shopping",
              links: [
                {
                  text: "Your Cart",
                  url: "/cart",
                },
                {
                  text: "your Orders",
                  url: "/orders",
                },
                {
                  text: "Addresses",
                  url: "/Addresses",
                },
                {
                  text: "Wishlist Items",
                  url: "/wishlist",
                },
              ],
            },
            {
              name: "More Links",
              links: [
                {
                  text: "Blog",
                  url: "/Blog",
                },
                {
                  text: "Buying Guide",
                  url: "/buying-guide",
                },
                {
                  text: "New Arrivals",
                  url: "/new-arrival",
                },
                {
                  text: "About Us",
                  url: "/about-us",
                },
              ],
            },
            {
              name: "Are you like me",
              icons: [
                { type: "facebook", url: "https://facebook.com" },
                { type: "instagram", url: "https://instagram.com" },
                { type: "youtube", url: "https://youtube.com" },
              ],
            },
            {
              links: [
                {
                  text: "35 Battersea Rise, London, PA 17201",
                  url: "/addresses",
                  name: "address",
                },
                {
                  text: "(+44) 263-2665",
                  url: "/(+44) 263-2665",
                  name: "phone",
                },
                {
                  text: "username@email.com",
                  url: "/username@email.com",
                  name: "email",
                },
              ],
            },
          ],
        },
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "neutral.400",
              "500": "neutral.500",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
              "600": "success.100",
              "700": "error.100",
            },
          },
          fonts: {
            heading: "",
            body: "Montserrat",
            misc: "",
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: "kiamoni-block-4",
      component: KiamoniBlock4,
      props: {
        content: {
          text: {
            title: "Why We Are The Best",
            subTitle:
              "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          },
          cards: [
            {
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg",
              text: {
                title: "Quality Food",
                subtitle:
                  "Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
              },
            },
            {
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg",
              text: {
                title: "Quality Food",
                subtitle:
                  "Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
              },
            },
            {
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg",
              text: {
                title: "Quality Food",
                subtitle:
                  "Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
              },
            },
            {
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg",
              text: {
                title: "Quality Food",
                subtitle:
                  "Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
              },
            },
          ],
        },
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "neutral.500",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: "kiamoni-block-5",
      component: KiamoniBlock5,
      props: {
        content: {
          text: {
            header: "Every bite is a good story",
            subtext: "Experience a culinary journey unlike any other",
          },
          images: [
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15.svg",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(1).svg",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg",
          ],
          buttons: [{ text: "See All Menu", link: "menu" }],
        },
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "neutral.400",
              "500": "neutral.500",
              "600": "primary.main",
              "700": "secondary.main",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
              "600": "success.100",
              "700": "error.100",
            },
          },
          fonts: {
            heading: "",
            body: "Montserrat",
            misc: "",
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: "kiamoni-block-6",
      component: KiamoniBlock6,
      props: {
        content: {
          text: {
            heading: "Featured Dishes",
          },
          menuItems_uuid: "c273a3c4-872b-4776-84ca-39202c45d354",
          menu_uuids: [
            "1d5e146e-9641-4a53-9661-145ff0dc4414",
            "74727f5f-0bdb-4841-8c2d-42b42ed5b231",
            "0b24d339-d4c5-44ce-aaf0-0f1a56dcb216",
            "755f9175-0518-445d-a477-13f78d450d99",
            "3bbe7dad-d83a-4766-bf4e-90c88f205e05",
            "07931586-1416-4c11-92bb-5f8a060b640c",
            "0b24d339-d4c5-44ce-aaf0-0f1a56dcb216",
            "3bbe7dad-d83a-4766-bf4e-90c88f205e05",
          ],
          button: [{ text: "View All Dishes", link: "/menu" }],
          currency: "₦",
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.600",
              "700": "neutral.500",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-7",
      component: KiamoniBlock7,
      props: {
        content: {
          text: {
            heading: "Signature Pizza",
            subHeading:
              "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          },
          button: [{ text: "See All Menu", link: "/menu" }],
          advert: {
            horizontal:
              "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Banner+(1).svg",
            vertical:
              "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Banner.svg",
          },
          menuItems_uuid: "c273a3c4-872b-4776-84ca-39202c45d354",
          menu_uuids: [
            "1d5e146e-9641-4a53-9661-145ff0dc4414",
            "74727f5f-0bdb-4841-8c2d-42b42ed5b231",
            "0b24d339-d4c5-44ce-aaf0-0f1a56dcb216",
            "755f9175-0518-445d-a477-13f78d450d99",
            "3bbe7dad-d83a-4766-bf4e-90c88f205e05",
            "07931586-1416-4c11-92bb-5f8a060b640c",
            "0b24d339-d4c5-44ce-aaf0-0f1a56dcb216",
            "3bbe7dad-d83a-4766-bf4e-90c88f205e05",
          ],
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.600",
              "700": "neutral.500",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-8",
      component: KiamoniBlock8,
      props: {
        content: {
          text: {
            heading: "Blog insight",
          },
          button: { text: "See All Menu", link: "/menu" },
          advert: {
            horizontal:
              "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Banner+(1).svg",
            vertical:
              "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Banner.svg",
          },
          blogs: [
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
            {
              date: "March 4, 2023",
              title: " How to make delicious afternoon meal",
              text: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...",
            image:'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png'},
          ],
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-10",
      component: KiamoniBlock10,
      props: {
        content: {
          menu_uuid: "c273a3c4-872b-4776-84ca-39202c45d354",
          text: {
            heading: "Explore Our Popular Categories",
          },
          cards: [
            {
              heading: "Appetizers",
              text: "Get your meal started off right with one of our delicious appetizers. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(1).png",
            },
            {
              heading: "Entrees",
              text: "Our entrees are made with the freshest ingredients and a whole lot of love. From our juicy burgers to our hand-rolled pasta dishes, there's something for every taste bud on our menu.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(2).png",
            },
            {
              heading: "Sides",
              text: "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(3).png",
            },
            {
              heading: "Desserts",
              text: "Save room for one of our decadent desserts. Our pastry chef has created an array of sweet treats that will leave you feeling satisfied and indulged.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(4).png",
            },
            {
              heading: "Breakfast",
              text: "Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(5).png",
            },
            {
              heading: "Beverages",
              text: "From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.",
              image:
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Image+(6).png",
            },
          ],
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.500",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-11",
      component: KiamoniBlock11,
      props: {
        content: {
          images: [
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger1.png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger2.png",
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger3.png",
          ],
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.black",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-12",
      component: KiamoniBlock12,
      props: {
        content: {
          text: {
            title: "What Our Customers Say",
            subtitle: "Read what our happy customers have to say about us",
          },
          comments: [
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
            {
              name: "Janet Doe",
              comment:
                "I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!",
            },
          ],
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.500",
              "700": "neutral.600",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-15",
      component: KiamoniBlock15,
      props: {
        content: {
          text: {
            title: "Added to cart successfully!",
          },
          currency: "₦",
          menuItem_uuid: "07931586-1416-4c11-92bb-5f8a060b640c",
          position: "BottomRight",
        },
        isSsr: false,
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.500",
              "700": "neutral.600",
              "800": "primary.200",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-16",
      component: KiamoniBlock6,
      props: {
        content: {
          text: {
            heading: "Related Dishes",
          },
          menuItems_uuid: "c273a3c4-872b-4776-84ca-39202c45d354",
          button: [{ text: "View All Dishes", link: "/menu" }],
          currency: "₦",
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
              "600": "neutral.600",
              "700": "neutral.500",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
    {
      name: "kiamoni-block-17",
      component: KiamoniBlock17,
      props: {
        content: {
          blog_uuid: "779e8d24-d98d-4c7e-9674-7322f3ebed35",
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
        ],
        configuration: {
          colors: {
            main: {
              "100": "neutral.white",
              "200": "neutral.black",
              "300": "neutral.700",
              "400": "secondary.main",
              "500": "primary.main",
            },
            button: {
              "100": "neutral.700",
              "200": "neutral.white",
              "300": "neutral.black",
              "400": "primary.main",
              "500": "secondary.main",
            },
          },
          fonts: {
            heading: "Montserrat",
            body: "Montserrat",
            misc: "",
          },
        },
      },
    },
  ];
};
