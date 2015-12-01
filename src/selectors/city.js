export function garagesInCity(garages, city_id) {
  return garages.filter(garage => ( garage.city_id === city_id ))
}
