import CardsAdress from "./CardsAdress/CardsAdress";
import o1 from '../../Images/01 1.png'
import o2 from '../../Images/02 1.png'
import o3 from '../../Images/03 1.png'
import o4 from '../../Images/04 1.png'
import o5 from '../../Images/05 1.png'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import whatsApp from '../../Images/Ватсап.png'
import viber from '../../Images/Вайбер.png'
import chat from '../../Images/Чат.png'

export default function HowToBuy() {
    return (
        <main className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-12 lg:p-20">
            <section className="max-w-6xl mx-auto bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white rounded-2xl p-6 sm:p-8 md:p-16 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                    <div className="md:flex-1 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm sm:text-base">
                            <Link to={"/"}>
                                <p className="cursor-pointer hover:underline">Главная</p>
                            </Link>
                            <p>/</p>
                            <p>Как покупать</p>
                        </div>
                        <h1 className="mt-4 text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-tight">
                            Научим покупать в&nbsp;Великобритании!
                        </h1>
                        <p className="mt-3 text-base sm:text-lg opacity-95">и экономить до 70%</p>
                        <div className="flex justify-center md:justify-start">
                            <Button
                                variant='contained'
                                sx={{
                                    backgroundColor: "#00D981",
                                    color: "white",
                                    fontSize: "13px",
                                    fontWeight: "700",
                                    borderRadius: "36px",
                                    width: "200px",
                                    height: "40px",
                                    margin: "20px"
                                }}
                            >
                                Рассчитать
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto mb-10 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Покупать в Великобритании очень просто</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.
                </p>
            </section>
            <div className="flex flex-col gap-10">
                <CardsAdress img={o1} num={"01"} title={"Получаем адрес для покупок в магазинах Великобритании"} desc={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
                <CardsAdress img={o2} num={"02"} title={"Идём за покупками в онлайн-магазины"} desc={"Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя."} />
                <CardsAdress img={o3} num={"03"} title={"Следим за перемещением посылки до склада"} desc={"После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом."} />
                <CardsAdress img={o4} num={"04"} title={"Оплачиваем доставку и покупки отправляются домой"} desc={"Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно. Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер."} />
                <CardsAdress img={o5} num={"05"} title={"Получаем посылку и спешим сделать новый заказ"} desc={"Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)"} />
            </div>
            <section className="max-w-6xl mx-auto grid gap-8 mt-8">
                <div className="flex justify-center md:justify-start">
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: "#00D981",
                            color: "white",
                            fontSize: "13px",
                            fontWeight: "700",
                            borderRadius: "36px",
                            width: "200px",
                            height: "40px",
                            margin: "20px"
                        }}
                    >
                        Рассчитать
                    </Button>
                </div>
            </section>
            <section className="max-w-6xl mx-auto mt-12 px-4">
                <div className="bg-gradient-to-r from-[#5B52A3] to-[#40B8EA] text-white rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                        <h4 className="text-lg sm:text-xl font-bold">Остались вопросы? Спросите нас в соцсетях!</h4>
                    </div>
                    <div className="flex justify-center sm:justify-end gap-4">
                        <img src={whatsApp} alt="" className="w-8 sm:w-10" />
                        <img src={viber} alt="" className="w-8 sm:w-10" />
                        <img src={chat} alt="" className="w-8 sm:w-10" />
                    </div>
                </div>
            </section>
        </main>
    );
}
