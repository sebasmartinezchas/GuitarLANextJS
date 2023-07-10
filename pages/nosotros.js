import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre Nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
              sapien congue, vulputate purus id, mollis lectus. Vivamus nec
              aliquam sem. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Integer varius lacus
              sit amet mauris pretium ornare. Mauris ut scelerisque massa, vitae
              sodales dui. Donec ullamcorper ante at tortor fringilla
              ullamcorper.
            </p>
            <p>
              Mauris suscipit varius est quis rhoncus. Ut suscipit finibus massa
              ut tempus. Aliquam id diam aliquet, eleifend libero non, faucibus
              turpis. Aenean viverra ex quis mi aliquam gravida. Ut sed ipsum
              malesuada lorem maximus vehicula sed ut mi. Integer non nulla
              nunc.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
