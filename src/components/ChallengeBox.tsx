import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
    const contextData = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                        <footer>
                            <button type="button"className={styles.challengeFailedButton}>
                                Falhei
                            </button>
                            <button type="button" className={styles.challengeSucceededButton}>
                                Completei
                            </button>
                        </footer>
                    </main>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber um novo desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de nível completando desafios
                </p>
                </div>
            )}
        </div>
    )
};