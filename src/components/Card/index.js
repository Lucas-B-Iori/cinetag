import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favorite.png';
import iconeDesfavoritar from './favorite_outline.png';
import { Link } from 'react-router-dom';


function Card({id, capa, titulo}) {

    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt='Capa do video/filme' className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img 
            src={icone} 
            alt='Favoritar filme/video' 
            className={styles.favoritar} 
            onClick={() => {
                adicionarFavorito({id, titulo, capa})
            }}/>
        </div>
    );
};

export default Card;