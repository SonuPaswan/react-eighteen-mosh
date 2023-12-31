import {CardBody, Heading, Image} from '@chakra-ui/react'
import {Card} from '@chakra-ui/card'
import {Game} from '../hooks/useGames'

interface Props {
  game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
