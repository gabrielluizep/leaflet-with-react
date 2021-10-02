# 🗺️ Mapas no React com LeafletJS

Está precisando adicionar um mapa interativo a sua aplicação React? Então este conjunto de bibliotecas podem te ajudar a chegar em seu objetivo!

##### [Veja aqui um exemplo do Leaflet funcionando com React.](https://gabrielluizep.github.io/leaflet-with-react/)

## O que é o LeafletJS?

[LeafletJS](https://leafletjs.com/) é uma biblioteca OpenSource em JavaScript que te auxilia a adicionar mapas [OpenStreetMap (OSM)](https://www.openstreetmap.org/) em sua aplicação web. Além de disponibilizar os principais aspectos do mapa OSM, a biblioteca conta com plugins que permitem lidar com a informação mostrada no mapa de uma maneira mais otimizada, como por exemplo heatmaps e agrupamento de pontos de localização.

## Como utilizá-lo no React?

Para acelerar o desenvolvimento e aplicar o padrão de código do React foi criado uma biblioteca auxiliar que abstrai funções do Leaflet em componentes JSX, chamada [React Leaflet](https://react-leaflet.js.org/). O uso desta biblioteca é opcional para a utilização do Leaflet no React, porém auxilia bastante e neste documento será tratado da utilização das duas bibliotecas juntas.

## Getting started with create-react-app && leaflet!

Para criar sua primeira aplicação React com Leaflet inicialize um React App:

```bash
npx create-react-app leaflet-with-react
```

Instale as bibliotecas mencionadas acima em seu React App:

```bash
cd leaflet-with-react
```

```bash
npm i leaflet react-leaflet
```

Devido a um [bug](https://stackoverflow.com/questions/67551922/cra-react-leaflet-failed-to-compile) na biblioteca é nessário fazer uma alteração no package.json quando utilizado o react-leaflet em um React App criado com create-react-app, apenas substitua o ”browserslist” padrão do create-react-app pelo seguinte array:

```json
"browserslist": [
   ">0.2%",
  "not dead",
  "not op_mini all"
]
```

Feito isso apague a pasta .cache localizada dentro do diretório node_modules da aplicação e execute o comando no terminal para recuperar a pasta .cache:

```bash
npm i
```

No index.js faça o import dos arquivos css utilizados pelo Leaflet:

```bash
import L from "leaflet";
```

E com isso o setup está feito! Podemos começar a incluir o mapa em nossa aplicação.

Para adicionar efetivamente o mapa a aplicação adicione o componente de container do mapa e dentro dele insira o componente que define o servidor de onde serão baixadas as imagens do mapa:

```js
<MapContainer
	style={{ width: "100vw", height: "100vh" }}
	center={[0, 0]}
	zoom={13}
>
	<TileLayer
		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	/>
</MapContainer>
```

###### Nota: é imprescindível a definição de uma altura para o componente MapContainer , assim como valores para as propriedades center e zoom.

## Incrementando seu mapa

Uma vez o mapa pronto, funcional em sua aplicação, será necessário adicionar alguma dinâmica que justifique sua existência na aplicação.

### Marcadores

O React Leaflet disponibiliza um componente que nos permite fazer isto de uma forma simples, o Marker:

```js
<MapContainer
	style={{ width: "100vw", height: "100vh" }}
	center={[0, 0]}
	zoom={13}
>
	<TileLayer
		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	/>
	<Marker position={[0, 0]}></Marker>
</MapContainer>
```

###### Nota: o componente Marker precisará de uma posição definida para aparecer no mapa

Com o marcador adicionado a tela você notará que a imagem do marcador não está sendo corretamente aplicada, para corrigir isso você deverá importar e definir a imagem como configuração do marcador, isso pode ser feito de maneira genérica alterando o padrão de todos os marcadores (o exemplo abaixo utiliza da imagem padrão do LeafletJS para marcadores e é adicionado ao index.js):

```js
import L from "leaflet"

import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon
```

Ou alterando pontualmente o ícone do marcador (App.js):

```js
import L from "leaflet"

import icon from "../assets/custom-icon.png"
import iconShadow from "../assets/custom-shadow.png"

let CustomIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
})

;<Marker position={[0, 0]} icon={CustomIcon}></Marker>
```

### Popups

Para auxiliar os marcadores podemos atribuir informações relacionadas a ele por meio de Popups, ao clicar em um marcador ele abre uma pequena div com algumas informações definidas.

Para utilizálo basta inserir o componente Popup dentro de um marcador:

```js
<Marker position={[0, 0]}>
	<Popup>Marcador com popup com React e Leaflet</Popup>
</Marker>
```

###### Nota: é possível renderizar componentes dentro do Popup!

## Utilizando [plugins Leaflet](https://leafletjs.com/plugins.html.) no React com useMap

A biblioteca LeafletJS possui alguns plugins auxiliares que permitem a adição de algumas features, tais como: heatmap, geocoding, clusterização, etc. Porém, utilizando a abstração React Leaflet, para utilizá-los seria necessário optar por uma maneira mais voltada ao JS puro para tratar o mapa, dado este problema foi criado um hook que permite a utilização de funções do Leaflet dentro de um componente, chamado useMap.

### [Heatmap plugin](https://github.com/Leaflet/Leaflet.heat)

Para exemplificar utilizarei o plugin Leaflet.heat, que cria um heatmap com pontos passados a ele como propriedade.

Primeiramente instale o plugin:

```bash
npm i leaflet.heat
```

Importamos a biblioteca e criamos a Layer de Heatmap para podermos usar em nosso mapa:

```js
import "leaflet.heat"

import { locations } from "./locations"

const HeatmapLayer = () => {
	const map = useMap()

	L.heatLayer(locations, { blur: 15 }).addTo(map)

	return null
}
```

Levando em consideração o arquivo locations.js que exporta um array de arrays que possuem latitude, longitude e peso do ponto

```js
export const addressPoints = [
  [-37.8869090667, 175.3657417333],
  [-37.8894207167, 175.4015351167],
  [-37.8927369333, 175.4087452333],
  [-37.90585105, 175.4453463833],
  [-37.9064188833, 175.4441556833],
  .
  .
  .
  ]
```

Aplicamos a o componente de layer dentro do MapContainer

```js
<HeatmapLayer />
```

## Outras aplicações para o useMap

Apesar de o hook useMap ser uma ferramenta ótima para adicionar o canal de comunicação entre o componente MapContainer e os plugins de Leaflet puro, sua principal função é mais genéria, trazer as funções padrões do Leaflet para um componente filho do MapContainer, utilizando assim qualquer função necessária do Leaflet!

### Alterando o centro do mapa

Um exemplo de uso que podemos citar é a maneira de como se deve ser atualizado o centro do mapa de maneira dinâmica, sem o usuário precisar arrastar até algum local, para isso utilizamos uma função padrão do Leaflet chamada changeView.

Assim como a camada de mapa de calor criada anteriormente para utilizarmos a função changeView precisaremos criar um componente a parte e colocá-lo como filho de algum MapContainer.

Podemos criar da seguinte maneirao componente que fará a troca de centro do mapa:

```js
const ChangeView = (props) => {
	const map = useMap()

	map.setView([props.newCenter.lat, props.newCenter.lng], 18)

	return null
}
```

```js
<ChangeView newCenter={{ lat: dynamicLat, lng: dynamicLng }} />
```

## Clusterização de marcadores com [React Leaflet Markercluster](https://github.com/yuzhva/react-leaflet-markercluster)

Para a utilização do clusterizador de marcadores, ou seja um agrupador de marcadores, é possível utilizar a biblioteca auxiliar react-leaflet-markercluster ao invés de utilizar o plugin e ter de fazer todo o processo na mão.

Começaremos instalando a biblioteca:

```bash
npm i react-leaflet-markercluster
```

Para a utilização da clusterização de marcadores precisaremos utilizar o componente MarkerClusterGroup, com os marcadores que se deseja agrupar como filhos deste componente:

import MarkerClusterGroup from "react-leaflet-markercluster";

```js
<MarkerClusterGroup>
	<Marker position={[0, 0]} />
	<Marker position={[0, 0]} />
	<Marker position={[0, 0]} />
</MarkerClusterGroup>
```

Agora você tem um cluster de marcadores em seu mapa, porém o cluster não possui uma imagem, ele está totalmente transaparente, apenas apresentando a quantidade de marcadores em cada cluster. Para resolver este problema de UI criamos um componente com a função L.divIcon e atribuímos um estilo a ele , é importate utilizar dentro do componente a informação passada pelo cluster do número de marcadores agrupados nele, para isso atribuímos um parâmetro para a função que irá dentro da propriedade iconCreateFunction e utilizamos getChildCount() para obter essa informação:

```css
.clusterDivStyle {
	width: 40px;
	height: 40px;

	background: #ba1122;
	border: 3px solid #ededed;

	border-radius: 50%;

	color: #ededed;
	line-height: 37px;
	text-align: center;
}
```

```js
<MarkerClusterGroup
	iconCreateFunction={(cluster) =>
		L.divIcon({
			html: `<span>${cluster.getChildCount()}</span>`,
			className: "clusterDivStyle",
			iconSize: L.point(40, 40, true)
		})
	}
>
	<Marker position={[0, 0]} />
	<Marker position={[0, 0]} />
	<Marker position={[0, 0]} />
</MarkerClusterGroup>
```
