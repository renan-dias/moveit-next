import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/renan-dias.png" alt="Eduardo Rodrigues" />
            <div>
                <strong>Renan Dias</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Teste
                </p>
            </div>
        </div>
        )
    }