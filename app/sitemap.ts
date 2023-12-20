import { MetadataRoute } from 'next'
type changeFrequency =
'always'| 'hourly'| 'daily'| 'weekly'| 'monthly'| 'yearly'| 'never'

const WEBSITE_HOST_URL = "https://hygraph-test-three.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const changeFrequency = 'daily' as changeFrequency 
    const cat1 = ["subcategoria1","subcategoria2","subcategoria3","subcategoria4","subcategoria5",].map((cat1) => ({
        url: `${WEBSITE_HOST_URL}/categoria1/${cat1}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency
    }))
    const cat2 = ["subcategoria6","subcategoria7","subcategoria8","subcategoria9","subcategoria10",].map((cat2) => ({
        url: `${WEBSITE_HOST_URL}/categoria2/${cat2}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency
    }))
    const cat3 = ["subcategoria11","subcategoria12","subcategoria13","subcategoria14","subcategoria15",].map((cat3) => ({
        url: `${WEBSITE_HOST_URL}/categoria3/${cat3}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency
    }))
    const cat4 = ["subcategoria16","subcategoria17","subcategoria18","subcategoria19","subcategoria20",].map((cat4) => ({
        url: `${WEBSITE_HOST_URL}/categoria4/${cat4}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency
    }))
    const cat5 = ["subcategoria21","subcategoria22","subcategoria23","subcategoria24","subcategoria25",].map((cat5) => ({
        url: `${WEBSITE_HOST_URL}/categoria5/${cat5}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency
    }))
    const route = [''].map((route) => ({
        url: `${WEBSITE_HOST_URL}${route}`,
        lastModified: new Date().toLocaleTimeString(),
        changeFrequency  
    }))

    return [...route, ...cat1, ...cat2, ...cat3, ...cat4, ...cat5]   
}

