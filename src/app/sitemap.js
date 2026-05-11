// app/sitemap.js

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// BLOGS API
async function getBlogs() {
  try {
    const res = await fetch(`${API_URL}/blogs`, {
      cache: "no-store",
    });

    const data = await res.json();

    return data?.data?.products || [];
  } catch (error) {
    console.log("Blogs Error:", error);
    return [];
  }
}

// CITY BLOGS API
async function getCityBlogs() {
  try {
    const res = await fetch(`${API_URL}/city-blogs`, {
      cache: "no-store",
    });

    const data = await res.json();

    return data?.data?.products || [];
  } catch (error) {
    console.log("City Blogs Error:", error);
    return [];
  }
}

export default async function sitemap() {
  const blogs = await getBlogs();
  const cityBlogs = await getCityBlogs();

  // STATIC ROUTES
  const staticPages = [
    "",

    "/contact",
    "/about",
    "/blog",
    "/gallery",

    // EOT CRANES
    "/eot-cranes",
    "/eot-cranes/underslung-crane",
    "/eot-cranes/single-girder-crane",
    "/eot-cranes/double-girder-crane",
    "/eot-cranes/jib-crane",

    // KBK
    "/kbk-light-crane-system",
    "/kbk-aluline",
    "/kbk-single-girder-suspension-cranes",
    "/kbk-double-girder-suspension-cranes",
    "/kbk-overhung-and-extending-cranes",
    "/kbk-cranes-manipulators",
    "/kbk-suspension-monorails",
    "/kbk-stacker-cranes",
    "/kbk-portal-cranes",

    // ROPE HOISTS
    "/rope-hoists",
    "/dhr-rope-hoist",
    "/dvr-rope-hoist",
    "/dh-hoist-units",

    // CHAIN HOISTS
    "/chain-hoists",
    "/chain-hoists/dc-pro-chain-hoist",
    "/chain-hoists/dcs-pro-chain-hoist",
    "/chain-hoists/dcm-pro-manulift",
    "/chain-hoists/dc-com-chain-hoist",
    "/chain-hoists/dcms-pro-manulift",
    "/chain-hoists/dcbs-chain-hoist",
    "/chain-hoists/dc-ii-chain-hoist",
    "/chain-hoists/dc-wind-chain-hoist",
    "/chain-hoists/ldc-d-and-kldc-d-double-chain-hoists",
    "/chain-hoists/chain-hoist-kdc-low-headroom-travelling-hoist",
    "/chain-hoists/kldc-traveling-hoist-big-bags",
    "/chain-hoists/ldc-q-quadro-chain-hoist",
    "/chain-hoists/trolleys-dc-chain-hoists",
    "/chain-hoists/ddc-articulated-trolley",
  ];

  // STATIC URLS
  const staticUrls = staticPages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));

  // BLOG URLS
  const blogUrls = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.updated_at || blog.created_at || new Date()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // CITY BLOG URLS
  const cityUrls = cityBlogs.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: new Date(city.updated_at || city.created_at || new Date()),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls, ...cityUrls];
}
