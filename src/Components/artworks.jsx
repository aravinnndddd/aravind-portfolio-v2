
const artworks= [
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
							<div id="artworks" className=" flex h-[100vh]  items-center overflow-x-scroll ">
    <div className="flex gap-10 px-[45px] ">
      {artworks.map((artwork, index) => (
        <img
          key={index}
          src={`/assets/${artwork}`}
          alt={`Artwork ${index + 1}`}
          className="h-[25vh] hover:scale-150 transition-all ease duration-300 rounded-[10px]"
        />
      ))}
    </div>
								</div>
  );
}

