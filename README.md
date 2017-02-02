# MicroShare

O MicroShare é um simples código para atender as necessidades mais básicas de compartilhamento entre as redes sociais mais comuns. Seu funcionamento está todo dentro de um arquivo JS de menos de 1kb.

### Funcionamento

O plugin é executado no DOM ready da página e cria uma instância em `window.MicroShare`  
Para compartilhar uma página, o javascript se baseará em 1, 2 ou 3 atributos que podem ser utilizados em qualquer elemento.
São eles:

- `data-microshare` (obrigatório)
- `data-microshare-url`
- `data-microshare-title`

##### data-microshare

Este indica que o compartilhamento deve ser feito quando o elemento com este atributo for clicado.
Apontando para a rede social que a página será compartilhada.
Aceita os valores:

- facebook
- twitter
- linkedin
- gplus

##### data-microshare-url

Indica qual URL será enviada para o compartilhamento. É opcional, e caso o atributo seja omitido, compartilhará a página atual no navegador.

##### data-microshare-title

Indica qual o título do link no compartilhamento. Usado somente no compartilhamento do Linkedin. Caso seja omitido, compartilhará o título da página atual

### Estendendo o MicroShare

Você pode adicionar uma rede social caso precise.  
O MicroShare possui o método `addShare( alias, url )`, que você pode usar para adicionar uma rede social nova ao shareMap do plugin.  
__Exemplo :__  
```js
MicroShare.addShare( 'tumblr', 'http://www.tumblr.com/share/link?url={{url}}' )
```

__Observações :__  
Ao adicionar uma rede nova ao shareMap, utilizar `{{url}}` e `{{title}}`, que serão substituídos pelas informações que estiverem nos elementos clicados.

## Contribuindo

Não se esqueça de adicionar seu contato no arquivo [humans.txt](https://bitbucket.org/tutorials/markdowndemo)
