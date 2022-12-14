export const state = () => ({
  cards: [],
});

export const mutations = {
  setCards(state, cards){
    state.cards = cards
  },
  deleteCard(state, card){
    state.cards.splice(state.cards.indexOf(card), 1)
  },
  editTitle(state, local){
    let box = state.cards.find(element => element.id == local.card.id)
    let index = state.cards.indexOf(box)
    state.cards[index].title = local.title
    state.cards[index].body = local.body
  }
};