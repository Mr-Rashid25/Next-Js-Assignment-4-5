
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Home() {
  return (    
    <main>
      <section className="heading">
        <h3>
          We Offer Business Solutions
          That Ensure Your Success
        </h3>
      </section>
    
      <div className="parentContainer">
        
        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/blog01.jpg" 
              alt="image01" 
              width={500} 
              height={300} 
            />
          </div>
          <h2 className="title">Payment Gateway</h2>
          <p className="description">Our mission is to empower fledgling business owners by providing them with professional, high-quality websites at an affordable cost.</p>
          <Link href="./Readmore1">
          <button className="readmore" >Read More</button>
          </Link>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/2.jpg" 
              alt="image02" 
              width={500}
              height={300}
            />
          </div>
          <h2 className="title">Dedicated Support</h2>
          <p className="description">We strive to level the playing field and give small business owners the tools they need to succeed in today’s digital age and unleash their full potential.</p>
          <Link href="./Readmore2">
          <button className="readmore">Read More</button>
          </Link>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/3.jpg" // Correct the path
              alt="image03" 
              width={500}
              height={300}
        
            />
          </div>
          <h2 className="title">Website Maintenance</h2>
          <p className="description">Our clients are at the heart of everything we do. We’re dedicated to providing personalized, attentive service to each and every one of our clients.</p>
          <Link href="./Readmore3">
          <button className="readmore">Read More</button>
          </Link>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/4.jpg" 
              alt="image04" 
              width={500}
              height={300}
            />
          </div>
          <h2 className="title">Projects Maintenance</h2>
          <p className="description">Moreover, we believe in building websites that are sustainable and scalable.</p>
          <Link href={"#"}>
          <button className="readmore">Read More</button>
          </Link>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/5.jpg" 
              alt="image05" 
              width={500}
              height={300}
            />
          </div>
          <h2 className="title">Terms of Service Agreements</h2>
          <p className="description">Ensuring that our clients are able to achieve their long-term goals.</p>
          <Link href={"#"}>
          <button className="readmore">Read More</button>
          </Link>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src="/images/5.jpg" // Correct the path for a new image if needed
              alt="image06" 
              width={500}
              height={300}
            />
          </div>
          <h2 className="title">Useful Links</h2>
          <ul>
            <li>Learning Resources</li>
            <li>Our Portfolio</li>
          </ul>
          <Link href={"#"}>
          <button className="readmore">Read More</button>
          </Link>
        </div>      
      </div>

    </main>
  );
}


