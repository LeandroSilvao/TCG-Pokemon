export interface PokemonResponse {
  count:number,
  data: Pokemon[],
  page: number,
  pageSize:number,
  totalCount: number
}

export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Abiliti[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Images;
  tcgplayer: TCGPlayer;
  cardmarket: CardMarket;
}
export interface Abiliti {
  name: string;
  text: string;
  type: string;
}
export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
export interface Weakness {
  type: string;
  value: string;
}
export interface Resistance {
  type: string;
  value: string;
}
export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}
export interface Legalities {
  unlimited: string;
}
export interface Images {
  small: string;
  large: string;
}
export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    holofoil: {
      low: number;
      mid: number;
      high: number;
      market: number;
      directLow: number;
    };
    reverseHolofoil: {
      low: number;
      mid: number;
      high: number;
      market: number;
      directLow: number;
    };
  };
}
export interface CardMarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
  };
}
