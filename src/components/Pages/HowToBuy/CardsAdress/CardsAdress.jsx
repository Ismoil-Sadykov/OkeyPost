
export default function CardsAdress({ img, num, title, desc }) {
    return (
        <div className="md:flex items-center gap-5 mb-8">
            <img src={img} alt="" />
            <div>
                <div className="flex items-center mb-8">
                    <p style={{borderRight:"1px solid gray"}} className="text-[#01CD7D] text-[30px] md:text-[80px]">{num}</p>
                    <p className="md:text-[24px] font-bold ml-[10px] md:w-[350px]">{title}</p>
                </div>
                <p className="text-[18px]">{desc}</p>
            </div>
        </div>
    )
}
