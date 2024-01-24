import type { Metadata } from "next";

export default function AboutPage(){
   return(
      <>
         <h1 className="text-7xl">About Page</h1>
      </>
   )
}


export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords:['About Page','Carlos','Información']
};