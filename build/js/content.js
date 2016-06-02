var content = {
  index: {
    navigation: {
      about: { id: "about", title: "About us" },
      offer: { id: "offer", title: "Our offer" },
      team: { id: "team", title: "Our team"},
      contact: { id: "contact", title: "Contact us"}
    },
    header: {
      intro: "Reinventing the co-packer model in Rwanda",
      button: "Download the concept note"
    },
    about: {
      legend: "Our approach is a game changer! It will drastically reduce the barriers to African SMME’s entering the premium agro-processing sector.",
      columns: {
        column1: {
          image: "parallax.png",
          title: "THE BIG IDEA",
          text: "We are reinventing the co-packer model in Rwanda. By providing affordable quality packaging, processing services, and market access, we will: <ul><li>increase farmer and entrepreneur incomes</li><li>reduce post-harvest losses</li><li>increase biodiversity </li><li>Increase availability of high quality African products</li></ul>"
        },
        column2: {
          image: "parallax.png",
          title: "THE APPROACH",
          text: "Our copacker will provide farmers, young entrepreneurs and existing agro processing companies with a customized support package (see below). These services will be available at a certified processing space. A mobile-based IT platform will guide the clients through the process, provide transparency along the value chain, up-to-date market prices and standardized procedures. This will be complemented by periodic in person support."
        },
        column3: {
          image: "parallax.png",
          title: "THE INNOVATION",
          text: "Existing solutions tend to overwhelm the farmers. They provide farmers witH processing machinery, simple packaging and some training, basically asking the famers to run both their farm and a small scale processing unit. This approach always fails. In the US, farmers and cooperatives can bring their products to a co-packer, who offers a wide range of services to produce high-quality food products."
        },
        column4: {
          image: "parallax.png",
          title: "THE VISION",
          text: "We are the first to adapt the co-packer business model to the African context. If we are successful in Rwanda, our ultimate objective is to scale this across the continent and impact the lives of millions of farmers and young entrepreneurs."
        }
      }
    },
    offer: {
      legend: "Your one stop shop for packaging and processing",
      bigText: "We offer a full menu of services",
      smallText: "We will offer both the option to sell the final processed products under the co-packer brand or under our clients own brand.",
      services: {
        column1: {
          skills: [
            { skill: "PRODUCT DEVELOPMENT" },
            { skill: "QUALITY CONTROL" },
            { skill: "BRANDING AND MARKETING" },
            { skill: "PROCESSING" }
          ]
        },
        column2: {
          skills: [
            { skill: "PACKAGING" },
            { skill: "FINANCING" },
            { skill: "ACCESS TO MARKETS" }
          ]
        }
      },
      packages: {
        package1: {
          title: "Full package",
          description: "Designed for <span>farmers cooperatives</span>",
          features: [
            { item: "FreshBlends obtains raw materials from farmers cooperatives" },
            { item: "FreshBlends takes responsibility for all steps from purchasing the inputs up to sales" },
            { item: "Final products will carry the ‘FreshBlends’ label" }
          ]          
        },
        package2: {
          title: "Start-up package",
          description: "Designed for <span>young entrepreneurs</span> and <span>farmer cooperatives</span>",
          features: [
            { item: "FreshBlends guides young entrepreneurs to bring their product idea to market" },
            { item: "Entrepreneurs can make use of all services offered by FreshBlends" },
            { item: "Final products will carry the clients label or if desired, the FreshBlends label" },
            { item: "Clients pay for part of the services through a monthly fee and the remainder at an agreed later date, ideally once they receive the revenues from sales." }
          ]     
        },
        package3: {
          title: "A la carte",
          description: "Designed for <span>established entrepreneurs</span>",
          features: [
            { item: "FreshBlends acts as a standard service-provider and entrepreneurs simply  select the services they desire." },
            { item: "Part of the fee is paid upfront and part is paid upon deliver of the services." }
          ]  
        }
      },
    },
    team: {
      legend: "Our diverse and experienced team is associated with Endeva and united by our shared motivation and belief that the co-packer model will transform the lives of farmers and young entrepreneurs in Rwanda and beyond.",
      members: [
        {
          image: "tendai.jpg",
          name: "Tendai Pasipanodya",
          position: "Co-founder",
          details: "Tendai has over 10 years experience in business development support for cooperatives, and entrepren-eurs in Africa. Agriculture is one of her main sectors of focus."
        },
        {
          image: "tendai.jpg",
          name: "Christina Gradl-Tewes",
          position: "Co-founder",
          details: "Christina has 13+ years of experience analyzing and advising inclusive businesses in a range of sectors including agriculture. She has published over 20 studies on the subject."
        },
        {
          image: "tendai.jpg",
          name: "Bruce Irabona",
          position: "On-site operations",
          details: "Based in Rwanda, Bruce brings his insights from 8 years of experience in agriculture. He has worked with smallholder farmers and linked them to export opportunities."
        },
        {
          image: "christian.jpg",
          name: "Christian Woelf Krueger",
          position: "Partnerships and fundraising",
          details: "Christian has excellent experience in building partnerships in Rwanda where he has initiated various projects in several sectors including agriculture."
        },
        {
          image: "akash.jpg",
          name: "Akash Uba",
          position: "Financial modeling",
          details: "Akash has 7 years of experience in financing for small- and medium-size businesses. He is supporting the team to develop a sound financial model."
        },
        {
          image: "megan.jpg",
          name: "Megan Leahy",
          position: "Research",
          details: "Megan brings 5+ years of research experience. She has conducted interviews and research on successful models of co-packing in the US."
        }
      ]
    },
    footer: {
      endeva: "This initiative is an Endeva Venture.",
      endevaDescription: "Endeva is a network of global experts working on business solutions for development. For close to 10 years we have engaged with businesses, donors and civil society organizations to catalyze inclusive business models both through direct support and by improving the enabling business environment that they work in. <a href='http://www.endeva.org/'>Learn more</a>",
      contacts: {
        rwanda: {
          country: "Rwanda",
          contact: "Bruce Irabona",
          email: "b.irabona@endeva.org",
          phone: "+250 788 619 800"
        },
        germany: {
          country: "Germany",
          contact: "Christina Gradl",
          email: "c.gradl@endeva.org",
          phone: "+49 176 820 390 60"
        }
      }
    }
  }
}

$(function() {
  $('body.home').append(Freshblends.Templates.index(content))
})
