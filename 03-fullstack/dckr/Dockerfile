FROM alpine:3.6

MAINTAINER Milan Felix Sulc <sulcmil@gmail.com>

RUN apk update

RUN apk add php7 \
			php7-fpm \
			php7-session \
			php7-pdo \
			php7-ctype \
			php7-phar \
			php7-iconv \
			php7-mbstring \
			php7-json \
			php7-openssl \
			php7-curl \
			php7-zip \
			php7-dom \
			php7-tokenizer \
			php7-xmlwriter \
			php7-gd \
			php7-imagick \
			curl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    composer global require "hirak/prestissimo:^0.3" && \
    composer global require "fxp/composer-asset-plugin:^1.2.0"

ADD ./php-fpm.conf /etc/php7/php-fpm.conf

EXPOSE 9000

CMD /usr/sbin/php-fpm7 -F -R -y /etc/php7/php-fpm.conf
