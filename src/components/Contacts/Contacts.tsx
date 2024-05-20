import clsx from "clsx";
import s from "./Contacts.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";

const Schema = z.object({
    tel: z.string(),
    name: z
        .string()
        .min(1, "Поле должно быть заполнено")
        .max(15, "Имя не может превышать 15 символов")
        .regex(/^[а-яА-Я\s']*$/, "Пожалуйста, вводите только кириллицу")
        .regex(/^\D+$/, "Пожалуйста, вводите только буквы")
        .refine(value => value.split("'").length <= 2, "Допускается не более одного апострофа"),
});

type Form = z.infer<typeof Schema>;

export const Contacts = () => {
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockTimer, setBlockTimer] = useState(30);

    const [T, setT] = useState(0);

    useEffect(() => {
        let timer: number | undefined;
        if (isBlocked) {
            timer = setInterval(() => {
                setBlockTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isBlocked]);

    useEffect(() => {
        if (blockTimer === 0) {
            setIsBlocked(false);
            setBlockTimer(30);
        }
    }, [blockTimer]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Form>({
        resolver: zodResolver(Schema),
        mode: "onChange",
    });
    const onSubmit = (value: Form) => {
        setT(0);
        alert(JSON.stringify(value));
    };
    return (
        <section>
            <div className={s.wrapper}>
                <div className={s.registrationWrapper}>
                    <form
                        className={s.form}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={s.registrationTitle}>БЕСПЛАТНОЕ занятие </h2>
                        <div className={s.formFields}>
                            <input
                                disabled={isBlocked}
                                {...register("name")}
                                placeholder='Имя'
                                className={s.input}
                                type='text'
                            />

                            <input
                                disabled={isBlocked}
                                {...register("tel")}
                                data-format='(000) 000-0000'
                                placeholder='Телефон'
                                className={s.input}
                                type='tel'
                            />
                        </div>
                        {<div>{isBlocked ? blockTimer : errors.name?.message}</div>}
                        <button
                            onClick={() => {
                                if (T === 3) {
                                    if (
                                        errors.name?.message?.length ||
                                        errors.tel?.message?.length
                                    ) {
                                        setT(0);
                                        setIsBlocked(true);
                                    }
                                } else {
                                    setT(prev => prev + 1);
                                }
                            }}
                            disabled={isBlocked}
                            className={s.btn}>
                            отправить
                        </button>
                    </form>
                </div>

                <div className={s.contactsBlock}>
                    <div className={s.contactsWrapper}>
                        <h2 className={s.contactsTitle}>Контакты</h2>
                        <div className={s.info}>
                            <div className={clsx(s.border, s.itemsBlock)}>
                                <div className={s.contactsItem}>
                                    <h4 className={s.itemTitle}>Адрес:</h4>
                                    <p className={s.itemDescription}>
                                        г. Омск, ул. 60 лет Октября, 7
                                    </p>
                                </div>
                                <div className={s.contactsItem}>
                                    <h4 className={s.itemTitle}>График работы:</h4>
                                    <p className={s.itemDescription}>Пн-Вс: с 8:00 до 22:00</p>
                                </div>
                            </div>
                            <div className={clsx(s.itemsBlock)}>
                                <div className={s.contactsItem}>
                                    <h4 className={s.itemTitle}>Телефон:</h4>
                                    <p className={s.itemDescription}>8-800-555-55-55</p>
                                </div>
                                <div className={s.contactsItem}>
                                    <h4 className={s.itemTitle}>Email:</h4>
                                    <p className={s.itemDescription}>omsk@supergym.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
