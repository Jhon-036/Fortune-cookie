const Phrase = ({quoteRandom}) => {
    console.log();
  return (
    <div className="bg--phrase">
        <p className="text--phrase">{quoteRandom.phrase}</p>
    </div>
  )
}
export default Phrase