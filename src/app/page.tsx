import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SectionOne from '@/components/SectionOne'
import SectionTwo from '@/components/SectionTwo'

// live list
async function getData(type:string) {
  const res = await fetch(`http://api.coinlayer.com/api/${type}?access_key=${process.env.myAccessKey}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

// export default async function Page() {
  

export default async function Home() {

  return (
    <main>
      <Header />
      <HeroSection />
      <SectionOne />

      {/* @ts-expect-error Async Server Component */}
      <SectionTwo />   
      <div>
      </div> 
    </main>
  )
}
