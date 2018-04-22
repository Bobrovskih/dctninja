/** модели utm инпутов */
const utms = [
    {
        name: 'utm_source',
        placeholder: 'источник',
        options: [
            'yandex',
            'google',
            'vk',
            'mail',
        ],
    }, {
        name: 'utm_medium',
        placeholder: 'канал',
        options: [
            'cpc',
            'ppc',
            'banner',
            'email',
            'organic',
        ],
    }, {
        name: 'utm_campaign',
        placeholder: 'кампания',
        options: [
            'kids_toys',
            'sport_auto',
            'smartfon',
            'mebel',
            'ip_telephony',
            'televizory',
        ],
    }, {
        name: 'utm_term',
        placeholder: 'фраза',
        options: [
            'kupit_odnushku',
            'remont_iphone_moskva',
            'gostinicy_ryadom',
            'skidki_obuv',
        ],
    }, {
        name: 'utm_content',
        placeholder: 'дополнительно',
        options: [
            'red_bike_text',
            'red_button',
            'short_title',
        ],
    },
];

export {
    utms,
};
