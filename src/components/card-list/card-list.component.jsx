import PropTypes from "prop-types";
import Card from "../card/card.component";

const CardList = ({ filteredBots }) => (
  <>
    <div id="medabots" className="flex flex-wrap justify-center">
      {filteredBots.map((bot) => {
        const { id } = bot;
        return <Card key={id} bot={bot} />;
      })}
    </div>
  </>
);

CardList.propTypes = {
  filteredBots: PropTypes.any,
};

export default CardList;
