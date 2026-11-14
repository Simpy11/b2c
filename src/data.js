const files = Object.entries(import.meta.glob('../images/*.jpeg', { eager: true, query: '?url', import: 'default' })).sort(([a],[b]) => a.localeCompare(b)).map(([,url]) => url)
export const imageAt = (index) => files[(index % files.length + files.length) % files.length] || ''
const names = [
  'The Gulmohar Embroidered Kurta','Rani Bloom Straight Kurta','Meher Cotton Co-ord Set','Noor Mirror Work Kurta','Gulabi Garden Tunic','Aabha Festive Three Piece Set','Sunehri Buti Anarkali','Ira Everyday Printed Kurta','Zoya Rose Short Top','Mogra Chikankari Tunic','Amara Festive Set','Saanjh Block Print Kurta','Jharokha Embroidered Tunic','Rangrez Cotton Kurta','Aarohi Soft Linen Co-ord','Nazaakat Floral Top','Kesar Celebration Set','Misri Dabu Print Kurta','Madhuban Straight Tunic','Chandni Pink Kurta','Roohani Festive Co-ord','Saheli Everyday Top','Pankh Handblock Kurta','Genda Phool Tunic','Sitara Celebration Set','Mitti Cotton Short Top','Hira Embroidered Kurta','Phool Patti Tunic','Riwaayat Festive Set','Aangan Printed Kurta','Gulmohar Daydream Tunic','Tara Mirror Work Top','Koyal Straight Kurta','Satrangi Three Piece Set','Mishri Floral Tunic','Leheriya Day Top'
]
const categories = ['Kurtis','Kurtis','3-Piece Ethnic Sets','Kurtis','Tunics','3-Piece Ethnic Sets','Kurtis','Kurtis','Short Tops','Tunics','3-Piece Ethnic Sets','Kurtis','Tunics','Kurtis','3-Piece Ethnic Sets','Short Tops','3-Piece Ethnic Sets','Kurtis','Tunics','Kurtis','3-Piece Ethnic Sets','Short Tops','Kurtis','Tunics','3-Piece Ethnic Sets','Short Tops','Kurtis','Tunics','3-Piece Ethnic Sets','Kurtis','Tunics','Short Tops','Kurtis','3-Piece Ethnic Sets','Tunics','Short Tops']
const kurtiTypes = ['Straight-cut Kurtis','Straight-cut Kurtis','Straight-cut Kurtis','Ghera Kurtis','Straight-cut Kurtis','Anarkali Kurtis','Straight-cut Kurtis','Ghera Kurtis','Anarkali Kurtis','Straight-cut Kurtis','Ghera Kurtis','Straight-cut Kurtis','Anarkali Kurtis']
const topTypes = ['Casual Tops','Shirts','Everyday wear','Casual Tops','Shirts','Everyday wear']
// Dominant garment colours mapped from the supplied product photos, in catalog order.
const colours = ['Pink','Burgundy','Beige','Blue','Brown','Beige','Red','Mustard','Red','Red','Red','Green','Brown','Blue','Brown','Mustard','Brown','Mustard','Pink','Mustard','Mustard','Mustard','Pink','Mustard','Red','Brown','Purple','Red','Black','Mustard','Brown','Red','Purple','Red','Green','Red']
// Alternate photos are included only where the supplied garment print/set was visually matched.
const alternateImages = { 6: 59, 7: 43, 8: 61, 19: 66, 25: 40, 27: 46, 35: 44 }
export const products = names.map((name, i) => {
  const category = categories[i]
  const isNew = i < 12
  const isBest = i % 3 !== 1
  const department = category === 'Short Tops' ? 'Western' : 'Ethnic'
  const subcategory = category === 'Kurtis' ? kurtiTypes[categories.slice(0, i + 1).filter(item => item === 'Kurtis').length - 1] : category === 'Short Tops' ? topTypes[categories.slice(0, i + 1).filter(item => item === 'Short Tops').length - 1] : category
  const collections = [...(isNew ? ['new'] : []), ...(isBest ? ['bestsellers'] : []), ...(i % 2 === 0 ? ['trending'] : []), ...(category === '3-Piece Ethnic Sets' || i % 7 === 0 ? ['festive'] : []), ...(i % 2 === 1 || category === 'Tunics' ? ['everyday'] : [])]
  const primaryImage = imageAt(i+3)
  const alternateIndex = alternateImages[i+1]
  const images = [primaryImage, ...(alternateIndex !== undefined ? [imageAt(alternateIndex)] : [])]
  return { id: `7f-${i+1}`, name, category, subcategory, department, collections, colour: colours[i], price: 1290 + ((i*317)%5)*200, oldPrice: 1990 + ((i*271)%5)*200, image: primaryImage, images, sizes: ['XS','S','M','L','XL','XXL'], fabric: ['Pure cotton','Cotton voile','Viscose blend','Cotton slub'][i%4], isNew, isBest, description: 'Made for the moments that become memories. Thoughtfully designed in a soft, breathable fabric with considered details and an easy, flattering fit.' }
})
export const categoriesList = ['Kurtis','Short Tops','Tunics','3-Piece Ethnic Sets']
