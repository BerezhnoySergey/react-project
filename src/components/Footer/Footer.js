import "./Footer.scss";

function Footer() {
	return (
		<div className="footer">
			<h2 className="footer__header">Contacts</h2>
			<p className="footer__text">
				Want to know more or just chat? You are welcome!
			</p>
			<button className="footer__btn">Send message</button>
		</div>
	);
}
export default Footer;

// function DataDispFunc(props) {
//   const [data, setData] = useState(null);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
//       const newData = await response.json();
//       setData(newData);
//     };
//     getData();
//   }, [props.id]);

//   if (data) {
//     return (
//       <>
//         <div>{data.name}</div>
//         <p>{props.text}</p>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           {count}
//         </button>
//       </>
//     );
//   } else {
//     return "No data";
//   }
// }
