# MicroShare

O MicroShare é um simples código para atender as necessidades mais básicas de compartilhamento entre as redes sociais mais comuns. Seu funcionamento está todo dentro de um arquivo JS de menos de 1kb.

### Funcionamento

Para compartilhar uma página, o javascript se baseará em 2, 3 ou 4 atributos que podem ser utilizados em qualquer elemento. 
São eles:

- data-microshare (obrigatório)
- data-microshare-service (obrigatório)
- data-microshare-url
- data-microshare-title

##### data-microshare

Este indica que o compartilhamento deve ser feito quando o elemento com este atributo for clicado.

##### data-microshare-service

Indica em qual rede social o conteúdo será compartilhado. Aceita os valores:

- facebook / fb
- twitter
- linkedin / in
- gplus / googleplus

##### data-microshare-url

Indica qual URL será enviada para no compartilhamento. É opcional, e caso o atributo seja omitido, compartilhará a página atual no navegador.

##### data-microshare-title

Indica qual o título do link no compartilhamento. Usado somente no compartilhamento do Linkedin.
