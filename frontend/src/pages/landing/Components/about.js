import styles from "../Style/about.module.css"
import myimg from "../Assets/about1.jpg"
function About() {
    return (
        <section id="about">
      <div className={styles.container}>
         <h1 className={styles.heading}>About Us</h1> 
         <hr
          style={{
            background: 'rgb(93, 226, 93)',
            color: 'rgb(93, 226, 93)',
            borderColor: 'rgb(93, 226, 93)',
            height: '0.1px',
            width: '80%',
          }}
        />
        <div className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia debitis hic, molestias quae facere qui itaque sed assumenda cumque vero, quasi incidunt ex fuga culpa eaque impedit aperiam ipsum nulla!
        <br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis similique odit cupiditate! Cupiditate, repellat quos quod iusto libero consequuntur accusantium consectetur minima, est officia itaque non, odit dolore cum amet!
        </div>
        <div>
            <img src={myimg} alt="an image" className={styles.myimg}/>
        </div>
      </div>
      </section>
    );
  }
  
  export default About