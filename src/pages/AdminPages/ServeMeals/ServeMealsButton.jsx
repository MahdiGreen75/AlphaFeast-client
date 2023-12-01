
import useMealReqButton from "../../../hooks/useMealReqButton/useMealReqButton";


// eslint-disable-next-line react/prop-types
const ServeMealsButton = ({ id }) => {
    const [data, isPending, refetch] = useMealReqButton(id);


    if (isPending) {
        return <div className="w-full flex items-center justify-center">
            <span className="loading loading-spinner loading-xs"></span>
        </div>
    }

    refetch();

    return (
        <>
            {
                data[0]?.states === undefined ?
                    <>Pending</> :
                    <>{data[0]?.states}</>
            }
        </>
    );
};

export default ServeMealsButton;