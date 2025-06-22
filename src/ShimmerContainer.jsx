import ShimmerCard from "./ShimmerCard";

const ShimmerContainer = () => {
  return (
    <div className="res-container">
      {[...Array(7)].map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerContainer;
