import Image from "next/future/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.url}
        width={600}
        height={400}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link legacyBehavior href={`/guitarras/${url}`} passHref>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  );
}
