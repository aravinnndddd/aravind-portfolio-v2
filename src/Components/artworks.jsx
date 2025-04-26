
const artworks = [
  'work2.png',
  'work3.png',
  'work4.png',
  'work5.png',
  'work6.png',
  'work7.png',
  'work8.png',
  'work1.png',
  'work10.jpg','work11.jpeg','work13.jpeg','work14.jpeg',
];

export default function Artworks() {
  return (
							<div id="artworks" className="flex h-[80vh] overflow-x-scroll ">
    <div className="flex mt-[10vh] gap-10 px-[45px] ">
      {artworks.map((artwork, index) => (
        <img
          key={index}
          src={require(`../assets/${artwork}`)}
          alt={`Artwork ${index + 1}`}
          className="h-[25vh] hover:scale-150 transition-all ease-in duration-500 rounded-[10px]"
        />
      ))}
    </div>
								</div>
  );
}

