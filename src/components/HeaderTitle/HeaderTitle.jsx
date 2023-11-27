

const HeaderTitle = ({header, headerPara}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 mt-5">
            <h2 className="text-3xl font-bold">{header}</h2>
            <h4 className="text-base font-semibold">{headerPara}</h4>
        </div>
    );
};

export default HeaderTitle;