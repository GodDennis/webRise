import s from "./About.module.scss";
import gym from "../../assets/images/gym.jpg";
import placeholder from "../../assets/images/Rectangle5.jpg";
// import video from "../../assets/video/Can_You_Feel_My_Heart.mp4";
import { Play } from "../../assets/Icons/Play";
import { useRef, useState } from "react";

export const About = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [play, setPlay] = useState(false);
    const onPlay = () => {
        if (!play) {
            videoRef.current?.play();
            setPlay(true);
        }
    };

    const onPause = () => {
        if (play) {
            videoRef.current?.pause();
            setPlay(false);
        }
    };

    return (
        <section className={s.about}>
            <div className={s.wrapper}>
                <div className={s.info}>
                    <h2 className={s.title}>Тренажерный зал</h2>
                    <p className={s.shortDescription}>Просторный зал площадью 900 кв/м</p>
                    <div className={s.description}>
                        <p>
                            Supergym – самый большой фитнес центр за Уралом и идеальное место для
                            укрепления тела и здоровья. Тренажерный зал оснащен всем необходимым
                            современным оборудованием для всех спортсменов.
                        </p>
                        <p className={s.hidden}>
                            В зале расположены отдельная зона для Crossfit и кардио-зона с 40
                            тренажерами. Также в фитнес центре есть несколько оборудованных залов
                            для различных видов групповых занятий.
                        </p>
                    </div>
                </div>

                <div>
                    <img
                        className={s.img}
                        src={gym}
                        alt='Фото зала'
                    />
                    <div className={s.videoContainer}>
                        {!play && (
                            <button
                                onClick={onPlay}
                                className={s.play}>
                                <Play />
                            </button>
                        )}
                        <video
                            onClick={onPause}
                            ref={videoRef}
                            poster={placeholder}
                            className={s.video}>
                            <source
                                // src={video}
                                type='video/mp4'
                            />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};
