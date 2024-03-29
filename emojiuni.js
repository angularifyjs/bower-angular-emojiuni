/**
 * angular-emojiuni v1.2.26 - 2014-11-09
 * @link https://github.com/angularifyjs/angular-emojiuni
 * @license MIT - Copyright (c) 2014 Angularfiy.org & HenryTao.
 */
angular.module('angular-emojiuni.chars', [

]).provider('EmojiuniChars', function() {
  var chars = {
    'items': [
      /*
      {
         'name':'Copyright Sign',
         'id':'copyright_sign',
         'image':'a9.png',
         'chars':[
            '\u00A9'
         ]
      },
      */
      /*
      {
         'name':'Registered Sign',
         'id':'registered_sign',
         'image':'ae.png',
         'chars':[
            '\u00AE'
         ]
      },
      */
      {
        'name': 'Double Exclamation Mark',
        'id': 'double_exclamation_mark',
        'image': '203c.png',
        'chars': [
          '\u203C'
        ]
      }, {
        'name': 'Exclamation Question Mark',
        'id': 'exclamation_question_mark',
        'image': '2049.png',
        'chars': [
          '\u2049'
        ]
      },
      /*
      {
         'name':'Trade Mark Sign',
         'id':'trade_mark_sign',
         'image':'2122.png',
         'chars':[
            '\u2122'
         ]
      },
      */
      {
        'name': 'Information Source',
        'id': 'information_source',
        'image': '2139.png',
        'chars': [
          '\u2139'
        ]
      }, {
        'name': 'Left Right Arrow',
        'id': 'left_right_arrow',
        'image': '2194.png',
        'chars': [
          '\u2194'
        ]
      }, {
        'name': 'Up Down Arrow',
        'id': 'up_down_arrow',
        'image': '2195.png',
        'chars': [
          '\u2195'
        ]
      }, {
        'name': 'North West Arrow',
        'id': 'north_west_arrow',
        'image': '2196.png',
        'chars': [
          '\u2196',
          '\uE237'
        ]
      }, {
        'name': 'North East Arrow',
        'id': 'north_east_arrow',
        'image': '2197.png',
        'chars': [
          '\u2197',
          '\uE236'
        ]
      }, {
        'name': 'South East Arrow',
        'id': 'south_east_arrow',
        'image': '2198.png',
        'chars': [
          '\u2198',
          '\uE238'
        ]
      }, {
        'name': 'South West Arrow',
        'id': 'south_west_arrow',
        'image': '2199.png',
        'chars': [
          '\u2199',
          '\uE239'
        ]
      }, {
        'name': 'Leftwards Arrow With Hook',
        'id': 'leftwards_arrow_with_hook',
        'image': '21a9.png',
        'chars': [
          '\u21A9'
        ]
      }, {
        'name': 'Rightwards Arrow With Hook',
        'id': 'rightwards_arrow_with_hook',
        'image': '21aa.png',
        'chars': [
          '\u21AA'
        ]
      }, {
        'name': 'Watch',
        'id': 'watch',
        'image': '231a.png',
        'chars': [
          '\u231A'
        ]
      }, {
        'name': 'Hourglass',
        'id': 'hourglass',
        'image': '231b.png',
        'chars': [
          '\u231B'
        ]
      }, {
        'name': 'Black Right-Pointing Double Triangle',
        'id': 'black_right-pointing_double_triangle',
        'image': '23e9.png',
        'chars': [
          '\u23E9',
          '\uE23C'
        ]
      }, {
        'name': 'Black Left-Pointing Double Triangle',
        'id': 'black_left-pointing_double_triangle',
        'image': '23ea.png',
        'chars': [
          '\u23EA',
          '\uE23D'
        ]
      }, {
        'name': 'Black Up-Pointing Double Triangle',
        'id': 'black_up-pointing_double_triangle',
        'image': '23eb.png',
        'chars': [
          '\u23EB'
        ]
      }, {
        'name': 'Black Down-Pointing Double Triangle',
        'id': 'black_down-pointing_double_triangle',
        'image': '23ec.png',
        'chars': [
          '\u23EC'
        ]
      }, {
        'name': 'Alarm Clock',
        'id': 'alarm_clock',
        'image': '23f0.png',
        'chars': [
          '\u23F0'
        ]
      }, {
        'name': 'Hourglass With Flowing Sand',
        'id': 'hourglass_with_flowing_sand',
        'image': '23f3.png',
        'chars': [
          '\u23F3'
        ]
      }, {
        'name': 'Circled Capital Letter M',
        'id': 'circled_capital_letter_m',
        'image': '24c2.png',
        'chars': [
          '\u24C2'
        ]
      }, {
        'name': 'Black Small Square',
        'id': 'black_small_square',
        'image': '25aa.png',
        'chars': [
          '\u25AA'
        ]
      }, {
        'name': 'White Small Square',
        'id': 'white_small_square',
        'image': '25ab.png',
        'chars': [
          '\u25AB'
        ]
      }, {
        'name': 'Black Right-Pointing Triangle',
        'id': 'black_right-pointing_triangle',
        'image': '25b6.png',
        'chars': [
          '\u25B6',
          '\uE23A'
        ]
      }, {
        'name': 'Black Left-Pointing Triangle',
        'id': 'black_left-pointing_triangle',
        'image': '25c0.png',
        'chars': [
          '\u25C0',
          '\uE23B'
        ]
      }, {
        'name': 'White Medium Square',
        'id': 'white_medium_square',
        'image': '25fb.png',
        'chars': [
          '\u25FB'
        ]
      }, {
        'name': 'Black Medium Square',
        'id': 'black_medium_square',
        'image': '25fc.png',
        'chars': [
          '\u25FC'
        ]
      }, {
        'name': 'White Medium Small Square',
        'id': 'white_medium_small_square',
        'image': '25fd.png',
        'chars': [
          '\u25FD'
        ]
      }, {
        'name': 'Black Medium Small Square',
        'id': 'black_medium_small_square',
        'image': '25fe.png',
        'chars': [
          '\u25FE'
        ]
      }, {
        'name': 'Black Sun With Rays',
        'id': 'black_sun_with_rays',
        'image': '2600.png',
        'chars': [
          '\u2600',
          '\uE04A'
        ]
      }, {
        'name': 'Cloud',
        'id': 'cloud',
        'image': '2601.png',
        'chars': [
          '\u2601',
          '\uE049'
        ]
      }, {
        'name': 'Black Telephone',
        'id': 'black_telephone',
        'image': '260e.png',
        'chars': [
          '\u260E',
          '\uE009'
        ]
      }, {
        'name': 'Ballot Box With X',
        'id': 'ballot_box_with_x',
        'image': '2611.png',
        'chars': [
          '\u2611'
        ]
      }, {
        'name': 'Umbrella With Rain Drops',
        'id': 'umbrella_with_rain_drops',
        'image': '2614.png',
        'chars': [
          '\u2614',
          '\uE04B'
        ]
      }, {
        'name': 'Hot Beverage',
        'id': 'hot_beverage',
        'image': '2615.png',
        'chars': [
          '\u2615',
          '\uE045'
        ]
      }, {
        'name': 'White Up Pointing Index',
        'id': 'white_up_pointing_index',
        'image': '261d.png',
        'chars': [
          '\u261D',
          '\uE00F'
        ]
      }, {
        'name': 'White Smiling Face',
        'id': 'white_smiling_face',
        'image': '263a.png',
        'chars': [
          '\u263A',
          '\uE414'
        ]
      }, {
        'name': 'Aries',
        'id': 'aries',
        'image': '2648.png',
        'chars': [
          '\u2648',
          '\uE23F'
        ]
      }, {
        'name': 'Taurus',
        'id': 'taurus',
        'image': '2649.png',
        'chars': [
          '\u2649',
          '\uE240'
        ]
      }, {
        'name': 'Gemini',
        'id': 'gemini',
        'image': '264a.png',
        'chars': [
          '\u264A',
          '\uE241'
        ]
      }, {
        'name': 'Cancer',
        'id': 'cancer',
        'image': '264b.png',
        'chars': [
          '\u264B',
          '\uE242'
        ]
      }, {
        'name': 'Leo',
        'id': 'leo',
        'image': '264c.png',
        'chars': [
          '\u264C',
          '\uE243'
        ]
      }, {
        'name': 'Virgo',
        'id': 'virgo',
        'image': '264d.png',
        'chars': [
          '\u264D',
          '\uE244'
        ]
      }, {
        'name': 'Libra',
        'id': 'libra',
        'image': '264e.png',
        'chars': [
          '\u264E',
          '\uE245'
        ]
      }, {
        'name': 'Scorpius',
        'id': 'scorpius',
        'image': '264f.png',
        'chars': [
          '\u264F',
          '\uE246'
        ]
      }, {
        'name': 'Sagittarius',
        'id': 'sagittarius',
        'image': '2650.png',
        'chars': [
          '\u2650',
          '\uE247'
        ]
      }, {
        'name': 'Capricorn',
        'id': 'capricorn',
        'image': '2651.png',
        'chars': [
          '\u2651',
          '\uE248'
        ]
      }, {
        'name': 'Aquarius',
        'id': 'aquarius',
        'image': '2652.png',
        'chars': [
          '\u2652',
          '\uE249'
        ]
      }, {
        'name': 'Pisces',
        'id': 'pisces',
        'image': '2653.png',
        'chars': [
          '\u2653',
          '\uE24A'
        ]
      },
      /*
      {
         'name':'Black Spade Suit',
         'id':'black_spade_suit',
         'image':'2660.png',
         'chars':[
            '\u2660',
            '\uE20E'
         ]
      },
      {
         'name':'Black Club Suit',
         'id':'black_club_suit',
         'image':'2663.png',
         'chars':[
            '\u2663',
            '\uE20F'
         ]
      },
      {
         'name':'Black Heart Suit',
         'id':'black_heart_suit',
         'image':'2665.png',
         'chars':[
            '\u2665',
            '\uE20C'
         ]
      },
      {
         'name':'Black Diamond Suit',
         'id':'black_diamond_suit',
         'image':'2666.png',
         'chars':[
            '\u2666',
            '\uE20D'
         ]
      },
      */
      {
        'name': 'Hot Springs',
        'id': 'hot_springs',
        'image': '2668.png',
        'chars': [
          '\u2668',
          '\uE123'
        ]
      }, {
        'name': 'Black Universal Recycling Symbol',
        'id': 'black_universal_recycling_symbol',
        'image': '267b.png',
        'chars': [
          '\u267B'
        ]
      }, {
        'name': 'Wheelchair Symbol',
        'id': 'wheelchair_symbol',
        'image': '267f.png',
        'chars': [
          '\u267F',
          '\uE20A'
        ]
      }, {
        'name': 'Anchor',
        'id': 'anchor',
        'image': '2693.png',
        'chars': [
          '\u2693'
        ]
      }, {
        'name': 'Warning Sign',
        'id': 'warning_sign',
        'image': '26a0.png',
        'chars': [
          '\u26A0',
          '\uE252'
        ]
      }, {
        'name': 'High Voltage Sign',
        'id': 'high_voltage_sign',
        'image': '26a1.png',
        'chars': [
          '\u26A1',
          '\uE13D'
        ]
      }, {
        'name': 'Medium White Circle',
        'id': 'medium_white_circle',
        'image': '26aa.png',
        'chars': [
          '\u26AA'
        ]
      }, {
        'name': 'Medium Black Circle',
        'id': 'medium_black_circle',
        'image': '26ab.png',
        'chars': [
          '\u26AB'
        ]
      }, {
        'name': 'Soccer Ball',
        'id': 'soccer_ball',
        'image': '26bd.png',
        'chars': [
          '\u26BD',
          '\uE018'
        ]
      }, {
        'name': 'Baseball',
        'id': 'baseball',
        'image': '26be.png',
        'chars': [
          '\u26BE',
          '\uE016'
        ]
      }, {
        'name': 'Snowman Without Snow',
        'id': 'snowman_without_snow',
        'image': '26c4.png',
        'chars': [
          '\u26C4',
          '\uE048'
        ]
      }, {
        'name': 'Sun Behind Cloud',
        'id': 'sun_behind_cloud',
        'image': '26c5.png',
        'chars': [
          '\u26C5'
        ]
      }, {
        'name': 'Ophiuchus',
        'id': 'ophiuchus',
        'image': '26ce.png',
        'chars': [
          '\u26CE',
          '\uE24B'
        ]
      }, {
        'name': 'No Entry',
        'id': 'no_entry',
        'image': '26d4.png',
        'chars': [
          '\u26D4'
        ]
      }, {
        'name': 'Church',
        'id': 'church',
        'image': '26ea.png',
        'chars': [
          '\u26EA',
          '\uE037'
        ]
      }, {
        'name': 'Fountain',
        'id': 'fountain',
        'image': '26f2.png',
        'chars': [
          '\u26F2',
          '\uE121'
        ]
      }, {
        'name': 'Flag In Hole',
        'id': 'flag_in_hole',
        'image': '26f3.png',
        'chars': [
          '\u26F3',
          '\uE014'
        ]
      }, {
        'name': 'Sailboat',
        'id': 'sailboat',
        'image': '26f5.png',
        'chars': [
          '\u26F5',
          '\uE01C'
        ]
      }, {
        'name': 'Tent',
        'id': 'tent',
        'image': '26fa.png',
        'chars': [
          '\u26FA',
          '\uE122'
        ]
      }, {
        'name': 'Fuel Pump',
        'id': 'fuel_pump',
        'image': '26fd.png',
        'chars': [
          '\u26FD',
          '\uE03A'
        ]
      }, {
        'name': 'Black Scissors',
        'id': 'black_scissors',
        'image': '2702.png',
        'chars': [
          '\u2702',
          '\uE313'
        ]
      }, {
        'name': 'White Heavy Check Mark',
        'id': 'white_heavy_check_mark',
        'image': '2705.png',
        'chars': [
          '\u2705'
        ]
      }, {
        'name': 'Airplane',
        'id': 'airplane',
        'image': '2708.png',
        'chars': [
          '\u2708',
          '\uE01D'
        ]
      }, {
        'name': 'Envelope',
        'id': 'envelope',
        'image': '2709.png',
        'chars': [
          '\u2709'
        ]
      }, {
        'name': 'Raised Fist',
        'id': 'raised_fist',
        'image': '270a.png',
        'chars': [
          '\u270A',
          '\uE010'
        ]
      }, {
        'name': 'Raised Hand',
        'id': 'raised_hand',
        'image': '270b.png',
        'chars': [
          '\u270B',
          '\uE012'
        ]
      }, {
        'name': 'Victory Hand',
        'id': 'victory_hand',
        'image': '270c.png',
        'chars': [
          '\u270C',
          '\uE011'
        ]
      }, {
        'name': 'Pencil',
        'id': 'pencil',
        'image': '270f.png',
        'chars': [
          '\u270F'
        ]
      }, {
        'name': 'Black Nib',
        'id': 'black_nib',
        'image': '2712.png',
        'chars': [
          '\u2712'
        ]
      }, {
        'name': 'Heavy Check Mark',
        'id': 'heavy_check_mark',
        'image': '2714.png',
        'chars': [
          '\u2714'
        ]
      }, {
        'name': 'Heavy Multiplication X',
        'id': 'heavy_multiplication_x',
        'image': '2716.png',
        'chars': [
          '\u2716'
        ]
      }, {
        'name': 'Sparkles',
        'id': 'sparkles',
        'image': '2728.png',
        'chars': [
          '\u2728',
          '\uE32E'
        ]
      }, {
        'name': 'Eight Spoked Asterisk',
        'id': 'eight_spoked_asterisk',
        'image': '2733.png',
        'chars': [
          '\u2733',
          '\uE206'
        ]
      }, {
        'name': 'Eight Pointed Black Star',
        'id': 'eight_pointed_black_star',
        'image': '2734.png',
        'chars': [
          '\u2734',
          '\uE205'
        ]
      }, {
        'name': 'Snowflake',
        'id': 'snowflake',
        'image': '2744.png',
        'chars': [
          '\u2744'
        ]
      }, {
        'name': 'Sparkle',
        'id': 'sparkle',
        'image': '2747.png',
        'chars': [
          '\u2747'
        ]
      }, {
        'name': 'Cross Mark',
        'id': 'cross_mark',
        'image': '274c.png',
        'chars': [
          '\u274C',
          '\uE333'
        ]
      }, {
        'name': 'Negative Squared Cross Mark',
        'id': 'negative_squared_cross_mark',
        'image': '274e.png',
        'chars': [
          '\u274E'
        ]
      }, {
        'name': 'Black Question Mark Ornament',
        'id': 'black_question_mark_ornament',
        'image': '2753.png',
        'chars': [
          '\u2753'
        ]
      }, {
        'name': 'White Question Mark Ornament',
        'id': 'white_question_mark_ornament',
        'image': '2754.png',
        'chars': [
          '\u2754',
          '\uE336'
        ]
      }, {
        'name': 'White Exclamation Mark Ornament',
        'id': 'white_exclamation_mark_ornament',
        'image': '2755.png',
        'chars': [
          '\u2755',
          '\uE337'
        ]
      }, {
        'name': 'Heavy Exclamation Mark Symbol',
        'id': 'heavy_exclamation_mark_symbol',
        'image': '2757.png',
        'chars': [
          '\u2757'
        ]
      }, {
        'name': 'Heavy Exclamation Mark Ornament',
        'id': 'heavy_exclamation_mark_ornament',
        'image': '2762.png',
        'chars': [
          '\u2762'
        ]
      }, {
        'name': 'Heavy Black Heart',
        'id': 'heavy_black_heart',
        'image': '2764.png',
        'chars': [
          '\u2764',
          '\uE022'
        ]
      }, {
        'name': 'Heavy Plus Sign',
        'id': 'heavy_plus_sign',
        'image': '2795.png',
        'chars': [
          '\u2795'
        ]
      }, {
        'name': 'Heavy Minus Sign',
        'id': 'heavy_minus_sign',
        'image': '2796.png',
        'chars': [
          '\u2796'
        ]
      }, {
        'name': 'Heavy Division Sign',
        'id': 'heavy_division_sign',
        'image': '2797.png',
        'chars': [
          '\u2797'
        ]
      }, {
        'name': 'Black Rightwards Arrow',
        'id': 'black_rightwards_arrow',
        'image': '27a1.png',
        'chars': [
          '\u27A1',
          '\uE234'
        ]
      }, {
        'name': 'Curly Loop',
        'id': 'curly_loop',
        'image': '27b0.png',
        'chars': [
          '\u27B0'
        ]
      }, {
        'name': 'Double Curly Loop',
        'id': 'double_curly_loop',
        'image': '27bf.png',
        'chars': [
          '\u27BF',
          '\uE211'
        ]
      }, {
        'name': 'Arrow Pointing Rightwards Then Curving Upwards',
        'id': 'arrow_pointing_rightwards_then_curving_upwards',
        'image': '2934.png',
        'chars': [
          '\u2934'
        ]
      }, {
        'name': 'Arrow Pointing Rightwards Then Downwards',
        'id': 'arrow_pointing_rightwards_then_downwards',
        'image': '2935.png',
        'chars': [
          '\u2935'
        ]
      }, {
        'name': 'Leftwards Black Arrow',
        'id': 'leftwards_black_arrow',
        'image': '2b05.png',
        'chars': [
          '\u2B05',
          '\uE235'
        ]
      }, {
        'name': 'Upwards Black Arrow',
        'id': 'upwards_black_arrow',
        'image': '2b06.png',
        'chars': [
          '\u2B06',
          '\uE232'
        ]
      }, {
        'name': 'Downwards Black Arrow',
        'id': 'downwards_black_arrow',
        'image': '2b07.png',
        'chars': [
          '\u2B07',
          '\uE233'
        ]
      }, {
        'name': 'Black Large Square',
        'id': 'black_large_square',
        'image': '2b1b.png',
        'chars': [
          '\u2B1B'
        ]
      }, {
        'name': 'White Large Square',
        'id': 'white_large_square',
        'image': '2b1c.png',
        'chars': [
          '\u2B1C'
        ]
      }, {
        'name': 'Whte Medium Star',
        'id': 'whte_medium_star',
        'image': '2b50.png',
        'chars': [
          '\u2B50'
        ]
      }, {
        'name': 'Heavy Large Circle',
        'id': 'heavy_large_circle',
        'image': '2b55.png',
        'chars': [
          '\u2B55',
          '\uE332'
        ]
      }, {
        'name': 'Wavy Dash',
        'id': 'wavy_dash',
        'image': '3030.png',
        'chars': [
          '\u3030'
        ]
      }, {
        'name': 'Part Alternation Mark',
        'id': 'part_alternation_mark',
        'image': '303d.png',
        'chars': [
          '\u303D',
          '\uE12C'
        ]
      }, {
        'name': 'Circled Ideograph Congratulation',
        'id': 'circled_ideograph_congratulation',
        'image': '3297.png',
        'chars': [
          '\u3297',
          '\uE30D'
        ]
      }, {
        'name': 'Circled Ideograph Secret',
        'id': 'circled_ideograph_secret',
        'image': '3299.png',
        'chars': [
          '\u3299',
          '\uE315'
        ]
      }, {
        'name': 'Private Use U+e50a',
        'id': 'private_use_u+e50a',
        'image': 'e50a.png',
        'chars': [
          '\uE50A'
        ]
      }, {
        'name': 'Apple Logo',
        'id': 'apple_logo',
        'image': 'f8ff.png',
        'chars': [
          '\uF8FF'
        ]
      }, {
        'name': 'Mahjong Tile Red Dragon',
        'id': 'mahjong_tile_red_dragon',
        'image': '1f004.png',
        'chars': [
          '\uD83C\uDC04',
          '\uE12D'
        ]
      }, {
        'name': 'Playing Card Black Joker',
        'id': 'playing_card_black_joker',
        'image': '1f0cf.png',
        'chars': [
          '\uD83C\uDCCF'
        ]
      }, {
        'name': 'Negative Squared Latin Capital Letter A',
        'id': 'negative_squared_latin_capital_letter_a',
        'image': '1f170.png',
        'chars': [
          '\uD83C\uDD70',
          '\uE532'
        ]
      }, {
        'name': 'Negative Squared Latin Capital Letter B',
        'id': 'negative_squared_latin_capital_letter_b',
        'image': '1f171.png',
        'chars': [
          '\uD83C\uDD71',
          '\uE533'
        ]
      }, {
        'name': 'Negative Squared Latin Capital Letter O',
        'id': 'negative_squared_latin_capital_letter_o',
        'image': '1f17e.png',
        'chars': [
          '\uD83C\uDD7E',
          '\uE535'
        ]
      }, {
        'name': 'Negative Squared Latin Capital Letter P',
        'id': 'negative_squared_latin_capital_letter_p',
        'image': '1f17f.png',
        'chars': [
          '\uD83C\uDD7F',
          '\uE14F'
        ]
      }, {
        'name': 'Negative Squared Ab',
        'id': 'negative_squared_ab',
        'image': '1f18e.png',
        'chars': [
          '\uD83C\uDD8E',
          '\uE534'
        ]
      }, {
        'name': 'Squared Cl',
        'id': 'squared_cl',
        'image': '1f191.png',
        'chars': [
          '\uD83C\uDD91'
        ]
      }, {
        'name': 'Squared Cool',
        'id': 'squared_cool',
        'image': '1f192.png',
        'chars': [
          '\uD83C\uDD92',
          '\uE214'
        ]
      }, {
        'name': 'Squared Free',
        'id': 'squared_free',
        'image': '1f193.png',
        'chars': [
          '\uD83C\uDD93'
        ]
      }, {
        'name': 'Squared Id',
        'id': 'squared_id',
        'image': '1f194.png',
        'chars': [
          '\uD83C\uDD94',
          '\uE229'
        ]
      }, {
        'name': 'Squared New',
        'id': 'squared_new',
        'image': '1f195.png',
        'chars': [
          '\uD83C\uDD95',
          '\uE212'
        ]
      }, {
        'name': 'Squared Ng',
        'id': 'squared_ng',
        'image': '1f196.png',
        'chars': [
          '\uD83C\uDD96'
        ]
      }, {
        'name': 'Squared Ok',
        'id': 'squared_ok',
        'image': '1f197.png',
        'chars': [
          '\uD83C\uDD97',
          '\uE24D'
        ]
      }, {
        'name': 'Squared Sos',
        'id': 'squared_sos',
        'image': '1f198.png',
        'chars': [
          '\uD83C\uDD98'
        ]
      }, {
        'name': 'Squared Up With Exclamation Mark',
        'id': 'squared_up_with_exclamation_mark',
        'image': '1f199.png',
        'chars': [
          '\uD83C\uDD99',
          '\uE213'
        ]
      }, {
        'name': 'Squared Vs',
        'id': 'squared_vs',
        'image': '1f19a.png',
        'chars': [
          '\uD83C\uDD9A',
          '\uE12E'
        ]
      }, {
        'name': 'Squared Katakana Koko',
        'id': 'squared_katakana_koko',
        'image': '1f201.png',
        'chars': [
          '\uD83C\uDE01',
          '\uE203'
        ]
      }, {
        'name': 'Squared Katakana Sa',
        'id': 'squared_katakana_sa',
        'image': '1f202.png',
        'chars': [
          '\uD83C\uDE02',
          '\uE228'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-7121',
        'id': 'squared_cjk_unified_ideograph-7121',
        'image': '1f21a.png',
        'chars': [
          '\uD83C\uDE1A',
          '\uE216'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-8d70',
        'id': 'squared_cjk_unified_ideograph-8d70',
        'image': '1f22f.png',
        'chars': [
          '\uD83C\uDE2F',
          '\uE22C'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-7981',
        'id': 'squared_cjk_unified_ideograph-7981',
        'image': '1f232.png',
        'chars': [
          '\uD83C\uDE32'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-7a7a',
        'id': 'squared_cjk_unified_ideograph-7a7a',
        'image': '1f233.png',
        'chars': [
          '\uD83C\uDE33',
          '\uE22B'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-5408',
        'id': 'squared_cjk_unified_ideograph-5408',
        'image': '1f234.png',
        'chars': [
          '\uD83C\uDE34'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-6e80',
        'id': 'squared_cjk_unified_ideograph-6e80',
        'image': '1f235.png',
        'chars': [
          '\uD83C\uDE35',
          '\uE22A'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-6709',
        'id': 'squared_cjk_unified_ideograph-6709',
        'image': '1f236.png',
        'chars': [
          '\uD83C\uDE36',
          '\uE215'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-6808',
        'id': 'squared_cjk_unified_ideograph-6808',
        'image': '1f237.png',
        'chars': [
          '\uD83C\uDE37',
          '\uE217'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-7533',
        'id': 'squared_cjk_unified_ideograph-7533',
        'image': '1f238.png',
        'chars': [
          '\uD83C\uDE38',
          '\uE218'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-5272',
        'id': 'squared_cjk_unified_ideograph-5272',
        'image': '1f239.png',
        'chars': [
          '\uD83C\uDE39',
          '\uE227'
        ]
      }, {
        'name': 'Squared Cjk Unified Ideograph-55b6',
        'id': 'squared_cjk_unified_ideograph-55b6',
        'image': '1f23a.png',
        'chars': [
          '\uD83C\uDE3A',
          '\uE22D'
        ]
      }, {
        'name': 'Circled Ideograph Advantage',
        'id': 'circled_ideograph_advantage',
        'image': '1f250.png',
        'chars': [
          '\uD83C\uDE50',
          '\uE226'
        ]
      }, {
        'name': 'Circled Ideograph Accept',
        'id': 'circled_ideograph_accept',
        'image': '1f251.png',
        'chars': [
          '\uD83C\uDE51'
        ]
      }, {
        'name': 'Cyclone',
        'id': 'cyclone',
        'image': '1f300.png',
        'chars': [
          '\uD83C\uDF00',
          '\uE443'
        ]
      }, {
        'name': 'Foggy',
        'id': 'foggy',
        'image': '1f301.png',
        'chars': [
          '\uD83C\uDF01'
        ]
      }, {
        'name': 'Closed Umbrella',
        'id': 'closed_umbrella',
        'image': '1f302.png',
        'chars': [
          '\uD83C\uDF02',
          '\uE43C'
        ]
      }, {
        'name': 'Night With Stars',
        'id': 'night_with_stars',
        'image': '1f303.png',
        'chars': [
          '\uD83C\uDF03',
          '\uE44B'
        ]
      }, {
        'name': 'Sunrise Over Mountains',
        'id': 'sunrise_over_mountains',
        'image': '1f304.png',
        'chars': [
          '\uD83C\uDF04',
          '\uE04D'
        ]
      }, {
        'name': 'Sunrise',
        'id': 'sunrise',
        'image': '1f305.png',
        'chars': [
          '\uD83C\uDF05',
          '\uE449'
        ]
      }, {
        'name': 'Cityscape At Dusk',
        'id': 'cityscape_at_dusk',
        'image': '1f306.png',
        'chars': [
          '\uD83C\uDF06',
          '\uE146'
        ]
      }, {
        'name': 'Sunset Over Buildings',
        'id': 'sunset_over_buildings',
        'image': '1f307.png',
        'chars': [
          '\uD83C\uDF07',
          '\uE44A'
        ]
      }, {
        'name': 'Rainbow',
        'id': 'rainbow',
        'image': '1f308.png',
        'chars': [
          '\uD83C\uDF08',
          '\uE44C'
        ]
      }, {
        'name': 'Bridge At Night',
        'id': 'bridge_at_night',
        'image': '1f309.png',
        'chars': [
          '\uD83C\uDF09'
        ]
      }, {
        'name': 'Water Wave',
        'id': 'water_wave',
        'image': '1f30a.png',
        'chars': [
          '\uD83C\uDF0A',
          '\uE43E'
        ]
      }, {
        'name': 'Volcano',
        'id': 'volcano',
        'image': '1f30b.png',
        'chars': [
          '\uD83C\uDF0B'
        ]
      }, {
        'name': 'Milky Way',
        'id': 'milky_way',
        'image': '1f30c.png',
        'chars': [
          '\uD83C\uDF0C'
        ]
      }, {
        'name': 'Earth Globe Europe-Africa',
        'id': 'earth_globe_europe-africa',
        'image': '1f30d.png',
        'chars': [
          '\uD83C\uDF0D'
        ]
      }, {
        'name': 'Earth Globe Americas',
        'id': 'earth_globe_americas',
        'image': '1f30e.png',
        'chars': [
          '\uD83C\uDF0E'
        ]
      }, {
        'name': 'Earth Globe Asia-Australia',
        'id': 'earth_globe_asia-australia',
        'image': '1f30f.png',
        'chars': [
          '\uD83C\uDF0F'
        ]
      }, {
        'name': 'Globe With Meridians',
        'id': 'globe_with_meridians',
        'image': '1f310.png',
        'chars': [
          '\uD83C\uDF10'
        ]
      }, {
        'name': 'New Moon Symbol',
        'id': 'new_moon_symbol',
        'image': '1f311.png',
        'chars': [
          '\uD83C\uDF11'
        ]
      }, {
        'name': 'Waxing Crescent Moon Symbol',
        'id': 'waxing_crescent_moon_symbol',
        'image': '1f312.png',
        'chars': [
          '\uD83C\uDF12'
        ]
      }, {
        'name': 'First Quarter Moon Symbol',
        'id': 'first_quarter_moon_symbol',
        'image': '1f313.png',
        'chars': [
          '\uD83C\uDF13'
        ]
      }, {
        'name': 'Waxing Gibbous Moon Symbol',
        'id': 'waxing_gibbous_moon_symbol',
        'image': '1f314.png',
        'chars': [
          '\uD83C\uDF14'
        ]
      }, {
        'name': 'Full Moon Symbol',
        'id': 'full_moon_symbol',
        'image': '1f315.png',
        'chars': [
          '\uD83C\uDF15'
        ]
      }, {
        'name': 'Waning Gibbous Moon Symbol',
        'id': 'waning_gibbous_moon_symbol',
        'image': '1f316.png',
        'chars': [
          '\uD83C\uDF16'
        ]
      }, {
        'name': 'Last Quarter Moon Symbol',
        'id': 'last_quarter_moon_symbol',
        'image': '1f317.png',
        'chars': [
          '\uD83C\uDF17'
        ]
      }, {
        'name': 'Waning Crescent Moon Symbol',
        'id': 'waning_crescent_moon_symbol',
        'image': '1f318.png',
        'chars': [
          '\uD83C\uDF18'
        ]
      }, {
        'name': 'Crescent Moon',
        'id': 'crescent_moon',
        'image': '1f319.png',
        'chars': [
          '\uD83C\uDF19',
          '\uE04C'
        ]
      }, {
        'name': 'New Moon With Face',
        'id': 'new_moon_with_face',
        'image': '1f31a.png',
        'chars': [
          '\uD83C\uDF1A'
        ]
      }, {
        'name': 'First Quarter Moon With Face',
        'id': 'first_quarter_moon_with_face',
        'image': '1f31b.png',
        'chars': [
          '\uD83C\uDF1B'
        ]
      }, {
        'name': 'Last Quarter Moon With Face',
        'id': 'last_quarter_moon_with_face',
        'image': '1f31c.png',
        'chars': [
          '\uD83C\uDF1C'
        ]
      }, {
        'name': 'Full Moon With Face',
        'id': 'full_moon_with_face',
        'image': '1f31d.png',
        'chars': [
          '\uD83C\uDF1D'
        ]
      }, {
        'name': 'Sun With Face',
        'id': 'sun_with_face',
        'image': '1f31e.png',
        'chars': [
          '\uD83C\uDF1E'
        ]
      }, {
        'name': 'Glowing Star',
        'id': 'glowing_star',
        'image': '1f31f.png',
        'chars': [
          '\uD83C\uDF1F',
          '\uE335'
        ]
      }, {
        'name': 'Shooting Star',
        'id': 'shooting_star',
        'image': '1f320.png',
        'chars': [
          '\uD83C\uDF20'
        ]
      }, {
        'name': 'Chestnut',
        'id': 'chestnut',
        'image': '1f330.png',
        'chars': [
          '\uD83C\uDF30'
        ]
      }, {
        'name': 'Seedling',
        'id': 'seedling',
        'image': '1f331.png',
        'chars': [
          '\uD83C\uDF31'
        ]
      }, {
        'name': 'Evergreen Tree',
        'id': 'evergreen_tree',
        'image': '1f332.png',
        'chars': [
          '\uD83C\uDF32'
        ]
      }, {
        'name': 'Deciduous Tree',
        'id': 'deciduous_tree',
        'image': '1f333.png',
        'chars': [
          '\uD83C\uDF33'
        ]
      }, {
        'name': 'Palm Tree',
        'id': 'palm_tree',
        'image': '1f334.png',
        'chars': [
          '\uD83C\uDF34',
          '\uE307'
        ]
      }, {
        'name': 'Cactus',
        'id': 'cactus',
        'image': '1f335.png',
        'chars': [
          '\uD83C\uDF35',
          '\uE308'
        ]
      }, {
        'name': 'Tulip',
        'id': 'tulip',
        'image': '1f337.png',
        'chars': [
          '\uD83C\uDF37',
          '\uE304'
        ]
      }, {
        'name': 'Cherry Blossom',
        'id': 'cherry_blossom',
        'image': '1f338.png',
        'chars': [
          '\uD83C\uDF38',
          '\uE030'
        ]
      }, {
        'name': 'Rose',
        'id': 'rose',
        'image': '1f339.png',
        'chars': [
          '\uD83C\uDF39',
          '\uE032'
        ]
      }, {
        'name': 'Hibiscus',
        'id': 'hibiscus',
        'image': '1f33a.png',
        'chars': [
          '\uD83C\uDF3A',
          '\uE303'
        ]
      }, {
        'name': 'Sunflower',
        'id': 'sunflower',
        'image': '1f33b.png',
        'chars': [
          '\uD83C\uDF3B',
          '\uE305'
        ]
      }, {
        'name': 'Blossom',
        'id': 'blossom',
        'image': '1f33c.png',
        'chars': [
          '\uD83C\uDF3C'
        ]
      }, {
        'name': 'Ear Of Maize',
        'id': 'ear_of_maize',
        'image': '1f33d.png',
        'chars': [
          '\uD83C\uDF3D'
        ]
      }, {
        'name': 'Ear Of Rice',
        'id': 'ear_of_rice',
        'image': '1f33e.png',
        'chars': [
          '\uD83C\uDF3E',
          '\uE444'
        ]
      }, {
        'name': 'Herb',
        'id': 'herb',
        'image': '1f33f.png',
        'chars': [
          '\uD83C\uDF3F'
        ]
      }, {
        'name': 'Four Leaf Clover',
        'id': 'four_leaf_clover',
        'image': '1f340.png',
        'chars': [
          '\uD83C\uDF40',
          '\uE110'
        ]
      }, {
        'name': 'Maple Leaf',
        'id': 'maple_leaf',
        'image': '1f341.png',
        'chars': [
          '\uD83C\uDF41',
          '\uE118'
        ]
      }, {
        'name': 'Fallen Leaf',
        'id': 'fallen_leaf',
        'image': '1f342.png',
        'chars': [
          '\uD83C\uDF42',
          '\uE119'
        ]
      }, {
        'name': 'Leaf Fluttering In Wind',
        'id': 'leaf_fluttering_in_wind',
        'image': '1f343.png',
        'chars': [
          '\uD83C\uDF43',
          '\uE447'
        ]
      }, {
        'name': 'Mushroom',
        'id': 'mushroom',
        'image': '1f344.png',
        'chars': [
          '\uD83C\uDF44'
        ]
      }, {
        'name': 'Tomato',
        'id': 'tomato',
        'image': '1f345.png',
        'chars': [
          '\uD83C\uDF45',
          '\uE349'
        ]
      }, {
        'name': 'Aubergine',
        'id': 'aubergine',
        'image': '1f346.png',
        'chars': [
          '\uD83C\uDF46',
          '\uE34A'
        ]
      }, {
        'name': 'Grapes',
        'id': 'grapes',
        'image': '1f347.png',
        'chars': [
          '\uD83C\uDF47'
        ]
      }, {
        'name': 'Melon',
        'id': 'melon',
        'image': '1f348.png',
        'chars': [
          '\uD83C\uDF48'
        ]
      }, {
        'name': 'Watermelon',
        'id': 'watermelon',
        'image': '1f349.png',
        'chars': [
          '\uD83C\uDF49',
          '\uE348'
        ]
      }, {
        'name': 'Tangerine',
        'id': 'tangerine',
        'image': '1f34a.png',
        'chars': [
          '\uD83C\uDF4A',
          '\uE346'
        ]
      }, {
        'name': 'Lemon',
        'id': 'lemon',
        'image': '1f34b.png',
        'chars': [
          '\uD83C\uDF4B'
        ]
      }, {
        'name': 'Banana',
        'id': 'banana',
        'image': '1f34c.png',
        'chars': [
          '\uD83C\uDF4C'
        ]
      }, {
        'name': 'Pineapple',
        'id': 'pineapple',
        'image': '1f34d.png',
        'chars': [
          '\uD83C\uDF4D'
        ]
      }, {
        'name': 'Red Apple',
        'id': 'red_apple',
        'image': '1f34e.png',
        'chars': [
          '\uD83C\uDF4E',
          '\uE345'
        ]
      }, {
        'name': 'Green Apple',
        'id': 'green_apple',
        'image': '1f34f.png',
        'chars': [
          '\uD83C\uDF4F'
        ]
      }, {
        'name': 'Pear',
        'id': 'pear',
        'image': '1f350.png',
        'chars': [
          '\uD83C\uDF50'
        ]
      }, {
        'name': 'Peach',
        'id': 'peach',
        'image': '1f351.png',
        'chars': [
          '\uD83C\uDF51'
        ]
      }, {
        'name': 'Cherries',
        'id': 'cherries',
        'image': '1f352.png',
        'chars': [
          '\uD83C\uDF52'
        ]
      }, {
        'name': 'Strawberry',
        'id': 'strawberry',
        'image': '1f353.png',
        'chars': [
          '\uD83C\uDF53',
          '\uE347'
        ]
      }, {
        'name': 'Hamburger',
        'id': 'hamburger',
        'image': '1f354.png',
        'chars': [
          '\uD83C\uDF54',
          '\uE120'
        ]
      }, {
        'name': 'Slice Of Pizza',
        'id': 'slice_of_pizza',
        'image': '1f355.png',
        'chars': [
          '\uD83C\uDF55'
        ]
      }, {
        'name': 'Meat On Bone',
        'id': 'meat_on_bone',
        'image': '1f356.png',
        'chars': [
          '\uD83C\uDF56'
        ]
      }, {
        'name': 'Poultry Leg',
        'id': 'poultry_leg',
        'image': '1f357.png',
        'chars': [
          '\uD83C\uDF57'
        ]
      }, {
        'name': 'Rice Cracker',
        'id': 'rice_cracker',
        'image': '1f358.png',
        'chars': [
          '\uD83C\uDF58',
          '\uE33D'
        ]
      }, {
        'name': 'Rice Ball',
        'id': 'rice_ball',
        'image': '1f359.png',
        'chars': [
          '\uD83C\uDF59',
          '\uE342'
        ]
      }, {
        'name': 'Cooked Rice',
        'id': 'cooked_rice',
        'image': '1f35a.png',
        'chars': [
          '\uD83C\uDF5A',
          '\uE33E'
        ]
      }, {
        'name': 'Curry And Rice',
        'id': 'curry_and_rice',
        'image': '1f35b.png',
        'chars': [
          '\uD83C\uDF5B',
          '\uE341'
        ]
      }, {
        'name': 'Steaming Bowl',
        'id': 'steaming_bowl',
        'image': '1f35c.png',
        'chars': [
          '\uD83C\uDF5C',
          '\uE340'
        ]
      }, {
        'name': 'Spaghetti',
        'id': 'spaghetti',
        'image': '1f35d.png',
        'chars': [
          '\uD83C\uDF5D',
          '\uE33F'
        ]
      }, {
        'name': 'Bread',
        'id': 'bread',
        'image': '1f35e.png',
        'chars': [
          '\uD83C\uDF5E',
          '\uE339'
        ]
      }, {
        'name': 'French Fries',
        'id': 'french_fries',
        'image': '1f35f.png',
        'chars': [
          '\uD83C\uDF5F',
          '\uE33B'
        ]
      }, {
        'name': 'Roasted Sweet Potato',
        'id': 'roasted_sweet_potato',
        'image': '1f360.png',
        'chars': [
          '\uD83C\uDF60'
        ]
      }, {
        'name': 'Dango',
        'id': 'dango',
        'image': '1f361.png',
        'chars': [
          '\uD83C\uDF61',
          '\uE33C'
        ]
      }, {
        'name': 'Oden',
        'id': 'oden',
        'image': '1f362.png',
        'chars': [
          '\uD83C\uDF62',
          '\uE343'
        ]
      }, {
        'name': 'Sushi',
        'id': 'sushi',
        'image': '1f363.png',
        'chars': [
          '\uD83C\uDF63',
          '\uE344'
        ]
      }, {
        'name': 'Fried Shrimp',
        'id': 'fried_shrimp',
        'image': '1f364.png',
        'chars': [
          '\uD83C\uDF64'
        ]
      }, {
        'name': 'Fish Cake With Swirl Design',
        'id': 'fish_cake_with_swirl_design',
        'image': '1f365.png',
        'chars': [
          '\uD83C\uDF65'
        ]
      }, {
        'name': 'Soft Ice Cream',
        'id': 'soft_ice_cream',
        'image': '1f366.png',
        'chars': [
          '\uD83C\uDF66',
          '\uE33A'
        ]
      }, {
        'name': 'Shaved Ice',
        'id': 'shaved_ice',
        'image': '1f367.png',
        'chars': [
          '\uD83C\uDF67',
          '\uE43F'
        ]
      }, {
        'name': 'Ice Cream',
        'id': 'ice_cream',
        'image': '1f368.png',
        'chars': [
          '\uD83C\uDF68'
        ]
      }, {
        'name': 'Doughnut',
        'id': 'doughnut',
        'image': '1f369.png',
        'chars': [
          '\uD83C\uDF69'
        ]
      }, {
        'name': 'Cookie',
        'id': 'cookie',
        'image': '1f36a.png',
        'chars': [
          '\uD83C\uDF6A'
        ]
      }, {
        'name': 'Chocolate Bar',
        'id': 'chocolate_bar',
        'image': '1f36b.png',
        'chars': [
          '\uD83C\uDF6B'
        ]
      }, {
        'name': 'Candy',
        'id': 'candy',
        'image': '1f36c.png',
        'chars': [
          '\uD83C\uDF6C'
        ]
      }, {
        'name': 'Lollipop',
        'id': 'lollipop',
        'image': '1f36d.png',
        'chars': [
          '\uD83C\uDF6D'
        ]
      }, {
        'name': 'Custard',
        'id': 'custard',
        'image': '1f36e.png',
        'chars': [
          '\uD83C\uDF6E'
        ]
      }, {
        'name': 'Honey Pot',
        'id': 'honey_pot',
        'image': '1f36f.png',
        'chars': [
          '\uD83C\uDF6F'
        ]
      }, {
        'name': 'Shortcake',
        'id': 'shortcake',
        'image': '1f370.png',
        'chars': [
          '\uD83C\uDF70',
          '\uE046'
        ]
      }, {
        'name': 'Bento Box',
        'id': 'bento_box',
        'image': '1f371.png',
        'chars': [
          '\uD83C\uDF71',
          '\uE34C'
        ]
      }, {
        'name': 'Pot Of Food',
        'id': 'pot_of_food',
        'image': '1f372.png',
        'chars': [
          '\uD83C\uDF72',
          '\uE34D'
        ]
      }, {
        'name': 'Cooking',
        'id': 'cooking',
        'image': '1f373.png',
        'chars': [
          '\uD83C\uDF73',
          '\uE147'
        ]
      }, {
        'name': 'Fork And Knife',
        'id': 'fork_and_knife',
        'image': '1f374.png',
        'chars': [
          '\uD83C\uDF74',
          '\uE043'
        ]
      }, {
        'name': 'Teacup Without Handle',
        'id': 'teacup_without_handle',
        'image': '1f375.png',
        'chars': [
          '\uD83C\uDF75',
          '\uE338'
        ]
      }, {
        'name': 'Sake Bottle And Cup',
        'id': 'sake_bottle_and_cup',
        'image': '1f376.png',
        'chars': [
          '\uD83C\uDF76',
          '\uE30B'
        ]
      }, {
        'name': 'Wine Glass',
        'id': 'wine_glass',
        'image': '1f377.png',
        'chars': [
          '\uD83C\uDF77'
        ]
      }, {
        'name': 'Cocktail Glass',
        'id': 'cocktail_glass',
        'image': '1f378.png',
        'chars': [
          '\uD83C\uDF78',
          '\uE044'
        ]
      }, {
        'name': 'Tropical Drink',
        'id': 'tropical_drink',
        'image': '1f379.png',
        'chars': [
          '\uD83C\uDF79'
        ]
      }, {
        'name': 'Beer Mug',
        'id': 'beer_mug',
        'image': '1f37a.png',
        'chars': [
          '\uD83C\uDF7A',
          '\uE047'
        ]
      }, {
        'name': 'Clinking Beer Mugs',
        'id': 'clinking_beer_mugs',
        'image': '1f37b.png',
        'chars': [
          '\uD83C\uDF7B',
          '\uE30C'
        ]
      }, {
        'name': 'Baby Bottle',
        'id': 'baby_bottle',
        'image': '1f37c.png',
        'chars': [
          '\uD83C\uDF7C'
        ]
      }, {
        'name': 'Ribbon',
        'id': 'ribbon',
        'image': '1f380.png',
        'chars': [
          '\uD83C\uDF80',
          '\uE314'
        ]
      }, {
        'name': 'Wrapped Present',
        'id': 'wrapped_present',
        'image': '1f381.png',
        'chars': [
          '\uD83C\uDF81',
          '\uE112'
        ]
      }, {
        'name': 'Birthday Cake',
        'id': 'birthday_cake',
        'image': '1f382.png',
        'chars': [
          '\uD83C\uDF82',
          '\uE34B'
        ]
      }, {
        'name': 'Jack-O-Lantern',
        'id': 'jack-o-lantern',
        'image': '1f383.png',
        'chars': [
          '\uD83C\uDF83',
          '\uE445'
        ]
      }, {
        'name': 'Christmas Tree',
        'id': 'christmas_tree',
        'image': '1f384.png',
        'chars': [
          '\uD83C\uDF84',
          '\uE033'
        ]
      }, {
        'name': 'Father Christmas',
        'id': 'father_christmas',
        'image': '1f385.png',
        'chars': [
          '\uD83C\uDF85',
          '\uE448'
        ]
      }, {
        'name': 'Fireworks',
        'id': 'fireworks',
        'image': '1f386.png',
        'chars': [
          '\uD83C\uDF86',
          '\uE117'
        ]
      }, {
        'name': 'Firework Sparkler',
        'id': 'firework_sparkler',
        'image': '1f387.png',
        'chars': [
          '\uD83C\uDF87',
          '\uE440'
        ]
      }, {
        'name': 'Balloon',
        'id': 'balloon',
        'image': '1f388.png',
        'chars': [
          '\uD83C\uDF88',
          '\uE310'
        ]
      }, {
        'name': 'Party Popper',
        'id': 'party_popper',
        'image': '1f389.png',
        'chars': [
          '\uD83C\uDF89',
          '\uE312'
        ]
      }, {
        'name': 'Confetti Ball',
        'id': 'confetti_ball',
        'image': '1f38a.png',
        'chars': [
          '\uD83C\uDF8A'
        ]
      }, {
        'name': 'Tanabata Tree',
        'id': 'tanabata_tree',
        'image': '1f38b.png',
        'chars': [
          '\uD83C\uDF8B'
        ]
      }, {
        'name': 'Crossed Flags',
        'id': 'crossed_flags',
        'image': '1f38c.png',
        'chars': [
          '\uD83C\uDF8C',
          '\uE143'
        ]
      }, {
        'name': 'Pine Decoration',
        'id': 'pine_decoration',
        'image': '1f38d.png',
        'chars': [
          '\uD83C\uDF8D',
          '\uE436'
        ]
      }, {
        'name': 'Japanese Dolls',
        'id': 'japanese_dolls',
        'image': '1f38e.png',
        'chars': [
          '\uD83C\uDF8E',
          '\uE438'
        ]
      }, {
        'name': 'Carp Streamer',
        'id': 'carp_streamer',
        'image': '1f38f.png',
        'chars': [
          '\uD83C\uDF8F',
          '\uE43B'
        ]
      }, {
        'name': 'Wind Chime',
        'id': 'wind_chime',
        'image': '1f390.png',
        'chars': [
          '\uD83C\uDF90',
          '\uE442'
        ]
      }, {
        'name': 'Moon Viewing Ceremony',
        'id': 'moon_viewing_ceremony',
        'image': '1f391.png',
        'chars': [
          '\uD83C\uDF91',
          '\uE446'
        ]
      }, {
        'name': 'School Satchel',
        'id': 'school_satchel',
        'image': '1f392.png',
        'chars': [
          '\uD83C\uDF92',
          '\uE43A'
        ]
      }, {
        'name': 'Graduation Cap',
        'id': 'graduation_cap',
        'image': '1f393.png',
        'chars': [
          '\uD83C\uDF93',
          '\uE439'
        ]
      }, {
        'name': 'Carousel Horse',
        'id': 'carousel_horse',
        'image': '1f3a0.png',
        'chars': [
          '\uD83C\uDFA0'
        ]
      }, {
        'name': 'Ferris Wheel',
        'id': 'ferris_wheel',
        'image': '1f3a1.png',
        'chars': [
          '\uD83C\uDFA1',
          '\uE124'
        ]
      }, {
        'name': 'Roller Coaster',
        'id': 'roller_coaster',
        'image': '1f3a2.png',
        'chars': [
          '\uD83C\uDFA2',
          '\uE433'
        ]
      }, {
        'name': 'Fishing Pole And Fish',
        'id': 'fishing_pole_and_fish',
        'image': '1f3a3.png',
        'chars': [
          '\uD83C\uDFA3'
        ]
      }, {
        'name': 'Microphone',
        'id': 'microphone',
        'image': '1f3a4.png',
        'chars': [
          '\uD83C\uDFA4',
          '\uE03C'
        ]
      }, {
        'name': 'Movie Camera',
        'id': 'movie_camera',
        'image': '1f3a5.png',
        'chars': [
          '\uD83C\uDFA5',
          '\uE03D'
        ]
      }, {
        'name': 'Cinema',
        'id': 'cinema',
        'image': '1f3a6.png',
        'chars': [
          '\uD83C\uDFA6',
          '\uE507'
        ]
      }, {
        'name': 'Headphone',
        'id': 'headphone',
        'image': '1f3a7.png',
        'chars': [
          '\uD83C\uDFA7',
          '\uE30A'
        ]
      }, {
        'name': 'Artist Palette',
        'id': 'artist_palette',
        'image': '1f3a8.png',
        'chars': [
          '\uD83C\uDFA8',
          '\uE502'
        ]
      }, {
        'name': 'Top Hat',
        'id': 'top_hat',
        'image': '1f3a9.png',
        'chars': [
          '\uD83C\uDFA9',
          '\uE503'
        ]
      }, {
        'name': 'Circus Tent',
        'id': 'circus_tent',
        'image': '1f3aa.png',
        'chars': [
          '\uD83C\uDFAA'
        ]
      }, {
        'name': 'Ticket',
        'id': 'ticket',
        'image': '1f3ab.png',
        'chars': [
          '\uD83C\uDFAB',
          '\uE125'
        ]
      }, {
        'name': 'Clapper Board',
        'id': 'clapper_board',
        'image': '1f3ac.png',
        'chars': [
          '\uD83C\uDFAC',
          '\uE324'
        ]
      }, {
        'name': 'Performing Arts',
        'id': 'performing_arts',
        'image': '1f3ad.png',
        'chars': [
          '\uD83C\uDFAD'
        ]
      }, {
        'name': 'Video Game',
        'id': 'video_game',
        'image': '1f3ae.png',
        'chars': [
          '\uD83C\uDFAE'
        ]
      }, {
        'name': 'Direct Hit',
        'id': 'direct_hit',
        'image': '1f3af.png',
        'chars': [
          '\uD83C\uDFAF',
          '\uE130'
        ]
      }, {
        'name': 'Slot Machine',
        'id': 'slot_machine',
        'image': '1f3b0.png',
        'chars': [
          '\uD83C\uDFB0',
          '\uE133'
        ]
      }, {
        'name': 'Billiards',
        'id': 'billiards',
        'image': '1f3b1.png',
        'chars': [
          '\uD83C\uDFB1',
          '\uE42C'
        ]
      }, {
        'name': 'Game Die',
        'id': 'game_die',
        'image': '1f3b2.png',
        'chars': [
          '\uD83C\uDFB2'
        ]
      }, {
        'name': 'Bowling',
        'id': 'bowling',
        'image': '1f3b3.png',
        'chars': [
          '\uD83C\uDFB3'
        ]
      }, {
        'name': 'Flower Playing Cards',
        'id': 'flower_playing_cards',
        'image': '1f3b4.png',
        'chars': [
          '\uD83C\uDFB4'
        ]
      }, {
        'name': 'Musical Note',
        'id': 'musical_note',
        'image': '1f3b5.png',
        'chars': [
          '\uD83C\uDFB5',
          '\uE03E'
        ]
      }, {
        'name': 'Multiple Music Notes',
        'id': 'multiple_music_notes',
        'image': '1f3b6.png',
        'chars': [
          '\uD83C\uDFB6',
          '\uE326'
        ]
      }, {
        'name': 'Saxophone',
        'id': 'saxophone',
        'image': '1f3b7.png',
        'chars': [
          '\uD83C\uDFB7',
          '\uE040'
        ]
      }, {
        'name': 'Guitar',
        'id': 'guitar',
        'image': '1f3b8.png',
        'chars': [
          '\uD83C\uDFB8',
          '\uE041'
        ]
      }, {
        'name': 'Musical Keyboard',
        'id': 'musical_keyboard',
        'image': '1f3b9.png',
        'chars': [
          '\uD83C\uDFB9'
        ]
      }, {
        'name': 'Trumpet',
        'id': 'trumpet',
        'image': '1f3ba.png',
        'chars': [
          '\uD83C\uDFBA',
          '\uE042'
        ]
      }, {
        'name': 'Violin',
        'id': 'violin',
        'image': '1f3bb.png',
        'chars': [
          '\uD83C\uDFBB'
        ]
      }, {
        'name': 'Musical Score',
        'id': 'musical_score',
        'image': '1f3bc.png',
        'chars': [
          '\uD83C\uDFBC'
        ]
      }, {
        'name': 'Running Shirt With Sash',
        'id': 'running_shirt_with_sash',
        'image': '1f3bd.png',
        'chars': [
          '\uD83C\uDFBD'
        ]
      }, {
        'name': 'Tennis Racquet And Ball',
        'id': 'tennis_racquet_and_ball',
        'image': '1f3be.png',
        'chars': [
          '\uD83C\uDFBE',
          '\uE015'
        ]
      }, {
        'name': 'Ski And Ski Boot',
        'id': 'ski_and_ski_boot',
        'image': '1f3bf.png',
        'chars': [
          '\uD83C\uDFBF',
          '\uE013'
        ]
      }, {
        'name': 'Basketball And Hoop',
        'id': 'basketball_and_hoop',
        'image': '1f3c0.png',
        'chars': [
          '\uD83C\uDFC0',
          '\uE42A'
        ]
      }, {
        'name': 'Chequered Flag',
        'id': 'chequered_flag',
        'image': '1f3c1.png',
        'chars': [
          '\uD83C\uDFC1',
          '\uE132'
        ]
      }, {
        'name': 'Snowboarder',
        'id': 'snowboarder',
        'image': '1f3c2.png',
        'chars': [
          '\uD83C\uDFC2'
        ]
      }, {
        'name': 'Runner',
        'id': 'runner',
        'image': '1f3c3.png',
        'chars': [
          '\uD83C\uDFC3',
          '\uE115'
        ]
      }, {
        'name': 'Surfer',
        'id': 'surfer',
        'image': '1f3c4.png',
        'chars': [
          '\uD83C\uDFC4',
          '\uE017'
        ]
      }, {
        'name': 'Trophy',
        'id': 'trophy',
        'image': '1f3c6.png',
        'chars': [
          '\uD83C\uDFC6',
          '\uE131'
        ]
      }, {
        'name': 'Horse Racing',
        'id': 'horse_racing',
        'image': '1f3c7.png',
        'chars': [
          '\uD83C\uDFC7'
        ]
      }, {
        'name': 'American Football',
        'id': 'american_football',
        'image': '1f3c8.png',
        'chars': [
          '\uD83C\uDFC8',
          '\uE42B'
        ]
      }, {
        'name': 'Rugby Football',
        'id': 'rugby_football',
        'image': '1f3c9.png',
        'chars': [
          '\uD83C\uDFC9'
        ]
      }, {
        'name': 'Swimmer',
        'id': 'swimmer',
        'image': '1f3ca.png',
        'chars': [
          '\uD83C\uDFCA',
          '\uE42D'
        ]
      }, {
        'name': 'House Building',
        'id': 'house_building',
        'image': '1f3e0.png',
        'chars': [
          '\uD83C\uDFE0',
          '\uE036'
        ]
      }, {
        'name': 'House With Garden',
        'id': 'house_with_garden',
        'image': '1f3e1.png',
        'chars': [
          '\uD83C\uDFE1'
        ]
      }, {
        'name': 'Office Building',
        'id': 'office_building',
        'image': '1f3e2.png',
        'chars': [
          '\uD83C\uDFE2',
          '\uE038'
        ]
      }, {
        'name': 'Japanese Post Office',
        'id': 'japanese_post_office',
        'image': '1f3e3.png',
        'chars': [
          '\uD83C\uDFE3',
          '\uE153'
        ]
      }, {
        'name': 'European Post Office',
        'id': 'european_post_office',
        'image': '1f3e4.png',
        'chars': [
          '\uD83C\uDFE4'
        ]
      }, {
        'name': 'Hospital',
        'id': 'hospital',
        'image': '1f3e5.png',
        'chars': [
          '\uD83C\uDFE5',
          '\uE155'
        ]
      }, {
        'name': 'Bank',
        'id': 'bank',
        'image': '1f3e6.png',
        'chars': [
          '\uD83C\uDFE6',
          '\uE14D'
        ]
      }, {
        'name': 'Automated Teller Machine',
        'id': 'automated_teller_machine',
        'image': '1f3e7.png',
        'chars': [
          '\uD83C\uDFE7',
          '\uE154'
        ]
      }, {
        'name': 'Hotel',
        'id': 'hotel',
        'image': '1f3e8.png',
        'chars': [
          '\uD83C\uDFE8',
          '\uE158'
        ]
      }, {
        'name': 'Love Hotel',
        'id': 'love_hotel',
        'image': '1f3e9.png',
        'chars': [
          '\uD83C\uDFE9',
          '\uE501'
        ]
      }, {
        'name': 'Convenience Store',
        'id': 'convenience_store',
        'image': '1f3ea.png',
        'chars': [
          '\uD83C\uDFEA',
          '\uE156'
        ]
      }, {
        'name': 'School',
        'id': 'school',
        'image': '1f3eb.png',
        'chars': [
          '\uD83C\uDFEB',
          '\uE157'
        ]
      }, {
        'name': 'Department Store',
        'id': 'department_store',
        'image': '1f3ec.png',
        'chars': [
          '\uD83C\uDFEC',
          '\uE504'
        ]
      }, {
        'name': 'Factory',
        'id': 'factory',
        'image': '1f3ed.png',
        'chars': [
          '\uD83C\uDFED',
          '\uE508'
        ]
      }, {
        'name': 'Izakaya Lantern',
        'id': 'izakaya_lantern',
        'image': '1f3ee.png',
        'chars': [
          '\uD83C\uDFEE'
        ]
      }, {
        'name': 'Japanese Castle',
        'id': 'japanese_castle',
        'image': '1f3ef.png',
        'chars': [
          '\uD83C\uDFEF',
          '\uE505'
        ]
      }, {
        'name': 'European Castle',
        'id': 'european_castle',
        'image': '1f3f0.png',
        'chars': [
          '\uD83C\uDFF0',
          '\uE506'
        ]
      }, {
        'name': 'Rat',
        'id': 'rat',
        'image': '1f400.png',
        'chars': [
          '\uD83D\uDC00'
        ]
      }, {
        'name': 'Mouse',
        'id': 'mouse',
        'image': '1f401.png',
        'chars': [
          '\uD83D\uDC01'
        ]
      }, {
        'name': 'Ox',
        'id': 'ox',
        'image': '1f402.png',
        'chars': [
          '\uD83D\uDC02'
        ]
      }, {
        'name': 'Water Buffalo',
        'id': 'water_buffalo',
        'image': '1f403.png',
        'chars': [
          '\uD83D\uDC03'
        ]
      }, {
        'name': 'Cow',
        'id': 'cow',
        'image': '1f404.png',
        'chars': [
          '\uD83D\uDC04'
        ]
      }, {
        'name': 'Tiger',
        'id': 'tiger',
        'image': '1f405.png',
        'chars': [
          '\uD83D\uDC05'
        ]
      }, {
        'name': 'Leopard',
        'id': 'leopard',
        'image': '1f406.png',
        'chars': [
          '\uD83D\uDC06'
        ]
      }, {
        'name': 'Rabbit',
        'id': 'rabbit',
        'image': '1f407.png',
        'chars': [
          '\uD83D\uDC07'
        ]
      }, {
        'name': 'Cat',
        'id': 'cat',
        'image': '1f408.png',
        'chars': [
          '\uD83D\uDC08'
        ]
      }, {
        'name': 'Dragon',
        'id': 'dragon',
        'image': '1f409.png',
        'chars': [
          '\uD83D\uDC09'
        ]
      }, {
        'name': 'Crocodile',
        'id': 'crocodile',
        'image': '1f40a.png',
        'chars': [
          '\uD83D\uDC0A'
        ]
      }, {
        'name': 'Whale',
        'id': 'whale',
        'image': '1f40b.png',
        'chars': [
          '\uD83D\uDC0B'
        ]
      }, {
        'name': 'Snail',
        'id': 'snail',
        'image': '1f40c.png',
        'chars': [
          '\uD83D\uDC0C'
        ]
      }, {
        'name': 'Snake',
        'id': 'snake',
        'image': '1f40d.png',
        'chars': [
          '\uD83D\uDC0D',
          '\uE52D'
        ]
      }, {
        'name': 'Horse',
        'id': 'horse',
        'image': '1f40e.png',
        'chars': [
          '\uD83D\uDC0E',
          '\uE134'
        ]
      }, {
        'name': 'Ram',
        'id': 'ram',
        'image': '1f40f.png',
        'chars': [
          '\uD83D\uDC0F'
        ]
      }, {
        'name': 'Goat',
        'id': 'goat',
        'image': '1f410.png',
        'chars': [
          '\uD83D\uDC10'
        ]
      }, {
        'name': 'Sheep',
        'id': 'sheep',
        'image': '1f411.png',
        'chars': [
          '\uD83D\uDC11',
          '\uE529'
        ]
      }, {
        'name': 'Monkey',
        'id': 'monkey',
        'image': '1f412.png',
        'chars': [
          '\uD83D\uDC12',
          '\uE528'
        ]
      }, {
        'name': 'Rooster',
        'id': 'rooster',
        'image': '1f413.png',
        'chars': [
          '\uD83D\uDC13'
        ]
      }, {
        'name': 'Chicken',
        'id': 'chicken',
        'image': '1f414.png',
        'chars': [
          '\uD83D\uDC14',
          '\uE52E'
        ]
      }, {
        'name': 'Dog',
        'id': 'dog',
        'image': '1f415.png',
        'chars': [
          '\uD83D\uDC15'
        ]
      }, {
        'name': 'Pig',
        'id': 'pig',
        'image': '1f416.png',
        'chars': [
          '\uD83D\uDC16'
        ]
      }, {
        'name': 'Boar',
        'id': 'boar',
        'image': '1f417.png',
        'chars': [
          '\uD83D\uDC17',
          '\uE52F'
        ]
      }, {
        'name': 'Elephant',
        'id': 'elephant',
        'image': '1f418.png',
        'chars': [
          '\uD83D\uDC18',
          '\uE526'
        ]
      }, {
        'name': 'Octopus',
        'id': 'octopus',
        'image': '1f419.png',
        'chars': [
          '\uD83D\uDC19',
          '\uE10A'
        ]
      }, {
        'name': 'Spiral Shell',
        'id': 'spiral_shell',
        'image': '1f41a.png',
        'chars': [
          '\uD83D\uDC1A',
          '\uE441'
        ]
      }, {
        'name': 'Bug',
        'id': 'bug',
        'image': '1f41b.png',
        'chars': [
          '\uD83D\uDC1B',
          '\uE525'
        ]
      }, {
        'name': 'Ant',
        'id': 'ant',
        'image': '1f41c.png',
        'chars': [
          '\uD83D\uDC1C'
        ]
      }, {
        'name': 'Honeybee',
        'id': 'honeybee',
        'image': '1f41d.png',
        'chars': [
          '\uD83D\uDC1D'
        ]
      }, {
        'name': 'Lady Beetle',
        'id': 'lady_beetle',
        'image': '1f41e.png',
        'chars': [
          '\uD83D\uDC1E'
        ]
      }, {
        'name': 'Fish',
        'id': 'fish',
        'image': '1f41f.png',
        'chars': [
          '\uD83D\uDC1F',
          '\uE019'
        ]
      }, {
        'name': 'Tropical Fish',
        'id': 'tropical_fish',
        'image': '1f420.png',
        'chars': [
          '\uD83D\uDC20',
          '\uE522'
        ]
      }, {
        'name': 'Blowfish',
        'id': 'blowfish',
        'image': '1f421.png',
        'chars': [
          '\uD83D\uDC21'
        ]
      }, {
        'name': 'Turtle',
        'id': 'turtle',
        'image': '1f422.png',
        'chars': [
          '\uD83D\uDC22'
        ]
      }, {
        'name': 'Hatching Chick',
        'id': 'hatching_chick',
        'image': '1f423.png',
        'chars': [
          '\uD83D\uDC23'
        ]
      }, {
        'name': 'Baby Chick',
        'id': 'baby_chick',
        'image': '1f424.png',
        'chars': [
          '\uD83D\uDC24',
          '\uE523'
        ]
      }, {
        'name': 'Front-Facing Baby Chick',
        'id': 'front-facing_baby_chick',
        'image': '1f425.png',
        'chars': [
          '\uD83D\uDC25'
        ]
      }, {
        'name': 'Bird',
        'id': 'bird',
        'image': '1f426.png',
        'chars': [
          '\uD83D\uDC26',
          '\uE521'
        ]
      }, {
        'name': 'Penguin',
        'id': 'penguin',
        'image': '1f427.png',
        'chars': [
          '\uD83D\uDC27',
          '\uE055'
        ]
      }, {
        'name': 'Koala',
        'id': 'koala',
        'image': '1f428.png',
        'chars': [
          '\uD83D\uDC28',
          '\uE527'
        ]
      }, {
        'name': 'Poodle',
        'id': 'poodle',
        'image': '1f429.png',
        'chars': [
          '\uD83D\uDC29'
        ]
      }, {
        'name': 'Dromedary Camel',
        'id': 'dromedary_camel',
        'image': '1f42a.png',
        'chars': [
          '\uD83D\uDC2A'
        ]
      }, {
        'name': 'Bactrian Camel',
        'id': 'bactrian_camel',
        'image': '1f42b.png',
        'chars': [
          '\uD83D\uDC2B',
          '\uE530'
        ]
      }, {
        'name': 'Dolphin',
        'id': 'dolphin',
        'image': '1f42c.png',
        'chars': [
          '\uD83D\uDC2C',
          '\uE520'
        ]
      }, {
        'name': 'Mouse Face',
        'id': 'mouse_face',
        'image': '1f42d.png',
        'chars': [
          '\uD83D\uDC2D',
          '\uE053'
        ]
      }, {
        'name': 'Cow Face',
        'id': 'cow_face',
        'image': '1f42e.png',
        'chars': [
          '\uD83D\uDC2E',
          '\uE52B'
        ]
      }, {
        'name': 'Tiger Face',
        'id': 'tiger_face',
        'image': '1f42f.png',
        'chars': [
          '\uD83D\uDC2F',
          '\uE050'
        ]
      }, {
        'name': 'Rabbit Face',
        'id': 'rabbit_face',
        'image': '1f430.png',
        'chars': [
          '\uD83D\uDC30',
          '\uE52C'
        ]
      }, {
        'name': 'Cat Face',
        'id': 'cat_face',
        'image': '1f431.png',
        'chars': [
          '\uD83D\uDC31',
          '\uE04F'
        ]
      }, {
        'name': 'Dragon Face',
        'id': 'dragon_face',
        'image': '1f432.png',
        'chars': [
          '\uD83D\uDC32'
        ]
      }, {
        'name': 'Spouting Whale',
        'id': 'spouting_whale',
        'image': '1f433.png',
        'chars': [
          '\uD83D\uDC33',
          '\uE054'
        ]
      }, {
        'name': 'Horse Face',
        'id': 'horse_face',
        'image': '1f434.png',
        'chars': [
          '\uD83D\uDC34',
          '\uE01A'
        ]
      }, {
        'name': 'Monkey Face',
        'id': 'monkey_face',
        'image': '1f435.png',
        'chars': [
          '\uD83D\uDC35',
          '\uE109'
        ]
      }, {
        'name': 'Dog Face',
        'id': 'dog_face',
        'image': '1f436.png',
        'chars': [
          '\uD83D\uDC36',
          '\uE052'
        ]
      }, {
        'name': 'Pig Face',
        'id': 'pig_face',
        'image': '1f437.png',
        'chars': [
          '\uD83D\uDC37',
          '\uE10B'
        ]
      }, {
        'name': 'Frog Face',
        'id': 'frog_face',
        'image': '1f438.png',
        'chars': [
          '\uD83D\uDC38',
          '\uE531'
        ]
      }, {
        'name': 'Hamster Face',
        'id': 'hamster_face',
        'image': '1f439.png',
        'chars': [
          '\uD83D\uDC39',
          '\uE524'
        ]
      }, {
        'name': 'Wolf Face',
        'id': 'wolf_face',
        'image': '1f43a.png',
        'chars': [
          '\uD83D\uDC3A',
          '\uE52A'
        ]
      }, {
        'name': 'Bear Face',
        'id': 'bear_face',
        'image': '1f43b.png',
        'chars': [
          '\uD83D\uDC3B',
          '\uE051'
        ]
      }, {
        'name': 'Panda Face',
        'id': 'panda_face',
        'image': '1f43c.png',
        'chars': [
          '\uD83D\uDC3C'
        ]
      }, {
        'name': 'Pig Nose',
        'id': 'pig_nose',
        'image': '1f43d.png',
        'chars': [
          '\uD83D\uDC3D'
        ]
      }, {
        'name': 'Paw Prints',
        'id': 'paw_prints',
        'image': '1f43e.png',
        'chars': [
          '\uD83D\uDC3E'
        ]
      }, {
        'name': 'Eyes',
        'id': 'eyes',
        'image': '1f440.png',
        'chars': [
          '\uD83D\uDC40',
          '\uE419'
        ]
      }, {
        'name': 'Ear',
        'id': 'ear',
        'image': '1f442.png',
        'chars': [
          '\uD83D\uDC42',
          '\uE41B'
        ]
      }, {
        'name': 'Nose',
        'id': 'nose',
        'image': '1f443.png',
        'chars': [
          '\uD83D\uDC43',
          '\uE41A'
        ]
      }, {
        'name': 'Mouth',
        'id': 'mouth',
        'image': '1f444.png',
        'chars': [
          '\uD83D\uDC44',
          '\uE41C'
        ]
      }, {
        'name': 'Tongue',
        'id': 'tongue',
        'image': '1f445.png',
        'chars': [
          '\uD83D\uDC45'
        ]
      }, {
        'name': 'White Up Pointing Backhand Index',
        'id': 'white_up_pointing_backhand_index',
        'image': '1f446.png',
        'chars': [
          '\uD83D\uDC46',
          '\uE22E'
        ]
      }, {
        'name': 'White Down Pointing Backhand Index',
        'id': 'white_down_pointing_backhand_index',
        'image': '1f447.png',
        'chars': [
          '\uD83D\uDC47',
          '\uE22F'
        ]
      }, {
        'name': 'White Left Pointing Backhand Index',
        'id': 'white_left_pointing_backhand_index',
        'image': '1f448.png',
        'chars': [
          '\uD83D\uDC48',
          '\uE230'
        ]
      }, {
        'name': 'White Right Pointing Backhand Index',
        'id': 'white_right_pointing_backhand_index',
        'image': '1f449.png',
        'chars': [
          '\uD83D\uDC49',
          '\uE231'
        ]
      }, {
        'name': 'Fisted Hand Sign',
        'id': 'fisted_hand_sign',
        'image': '1f44a.png',
        'chars': [
          '\uD83D\uDC4A',
          '\uE00D'
        ]
      }, {
        'name': 'Waving Hand Sign',
        'id': 'waving_hand_sign',
        'image': '1f44b.png',
        'chars': [
          '\uD83D\uDC4B',
          '\uE41E'
        ]
      }, {
        'name': 'Ok Hand Sign',
        'id': 'ok_hand_sign',
        'image': '1f44c.png',
        'chars': [
          '\uD83D\uDC4C',
          '\uE420'
        ]
      }, {
        'name': 'Thumbs Up Sign',
        'id': 'thumbs_up_sign',
        'image': '1f44d.png',
        'chars': [
          '\uD83D\uDC4D',
          '\uE00E'
        ]
      }, {
        'name': 'Thumbs Down Sign',
        'id': 'thumbs_down_sign',
        'image': '1f44e.png',
        'chars': [
          '\uD83D\uDC4E',
          '\uE421'
        ]
      }, {
        'name': 'Clapping Hands Sign',
        'id': 'clapping_hands_sign',
        'image': '1f44f.png',
        'chars': [
          '\uD83D\uDC4F',
          '\uE41F'
        ]
      }, {
        'name': 'Open Hands Sign',
        'id': 'open_hands_sign',
        'image': '1f450.png',
        'chars': [
          '\uD83D\uDC50',
          '\uE422'
        ]
      }, {
        'name': 'Crown',
        'id': 'crown',
        'image': '1f451.png',
        'chars': [
          '\uD83D\uDC51',
          '\uE10E'
        ]
      }, {
        'name': 'Womans Hat',
        'id': 'womans_hat',
        'image': '1f452.png',
        'chars': [
          '\uD83D\uDC52',
          '\uE318'
        ]
      }, {
        'name': 'Eyeglasses',
        'id': 'eyeglasses',
        'image': '1f453.png',
        'chars': [
          '\uD83D\uDC53'
        ]
      }, {
        'name': 'Necktie',
        'id': 'necktie',
        'image': '1f454.png',
        'chars': [
          '\uD83D\uDC54',
          '\uE302'
        ]
      }, {
        'name': 'T-Shirt',
        'id': 't-shirt',
        'image': '1f455.png',
        'chars': [
          '\uD83D\uDC55',
          '\uE006'
        ]
      }, {
        'name': 'Jeans',
        'id': 'jeans',
        'image': '1f456.png',
        'chars': [
          '\uD83D\uDC56'
        ]
      }, {
        'name': 'Dress',
        'id': 'dress',
        'image': '1f457.png',
        'chars': [
          '\uD83D\uDC57',
          '\uE319'
        ]
      }, {
        'name': 'Kimono',
        'id': 'kimono',
        'image': '1f458.png',
        'chars': [
          '\uD83D\uDC58',
          '\uE321'
        ]
      }, {
        'name': 'Bikini',
        'id': 'bikini',
        'image': '1f459.png',
        'chars': [
          '\uD83D\uDC59',
          '\uE322'
        ]
      }, {
        'name': 'Womans Clothes',
        'id': 'womans_clothes',
        'image': '1f45a.png',
        'chars': [
          '\uD83D\uDC5A'
        ]
      }, {
        'name': 'Purse',
        'id': 'purse',
        'image': '1f45b.png',
        'chars': [
          '\uD83D\uDC5B'
        ]
      }, {
        'name': 'Handbag',
        'id': 'handbag',
        'image': '1f45c.png',
        'chars': [
          '\uD83D\uDC5C',
          '\uE323'
        ]
      }, {
        'name': 'Pouch',
        'id': 'pouch',
        'image': '1f45d.png',
        'chars': [
          '\uD83D\uDC5D'
        ]
      }, {
        'name': 'Mans Shoe',
        'id': 'mans_shoe',
        'image': '1f45e.png',
        'chars': [
          '\uD83D\uDC5E'
        ]
      }, {
        'name': 'Athletic Shoe',
        'id': 'athletic_shoe',
        'image': '1f45f.png',
        'chars': [
          '\uD83D\uDC5F',
          '\uE007'
        ]
      }, {
        'name': 'High-Heeled Shoe',
        'id': 'high-heeled_shoe',
        'image': '1f460.png',
        'chars': [
          '\uD83D\uDC60',
          '\uE13E'
        ]
      }, {
        'name': 'Womans Sandal',
        'id': 'womans_sandal',
        'image': '1f461.png',
        'chars': [
          '\uD83D\uDC61',
          '\uE31A'
        ]
      }, {
        'name': 'Womans Boots',
        'id': 'womans_boots',
        'image': '1f462.png',
        'chars': [
          '\uD83D\uDC62',
          '\uE31B'
        ]
      }, {
        'name': 'Footprints',
        'id': 'footprints',
        'image': '1f463.png',
        'chars': [
          '\uD83D\uDC63',
          '\uE536'
        ]
      }, {
        'name': 'Bust In Silhouette',
        'id': 'bust_in_silhouette',
        'image': '1f464.png',
        'chars': [
          '\uD83D\uDC64'
        ]
      }, {
        'name': 'Busts In Silhouette',
        'id': 'busts_in_silhouette',
        'image': '1f465.png',
        'chars': [
          '\uD83D\uDC65'
        ]
      }, {
        'name': 'Boy',
        'id': 'boy',
        'image': '1f466.png',
        'chars': [
          '\uD83D\uDC66',
          '\uE001'
        ]
      }, {
        'name': 'Girl',
        'id': 'girl',
        'image': '1f467.png',
        'chars': [
          '\uD83D\uDC67',
          '\uE002'
        ]
      }, {
        'name': 'Man',
        'id': 'man',
        'image': '1f468.png',
        'chars': [
          '\uD83D\uDC68',
          '\uE004'
        ]
      }, {
        'name': 'Woman',
        'id': 'woman',
        'image': '1f469.png',
        'chars': [
          '\uD83D\uDC69',
          '\uE005'
        ]
      }, {
        'name': 'Family',
        'id': 'family',
        'image': '1f46a.png',
        'chars': [
          '\uD83D\uDC6A'
        ]
      }, {
        'name': 'Man And Woman Holding Hands',
        'id': 'man_and_woman_holding_hands',
        'image': '1f46b.png',
        'chars': [
          '\uD83D\uDC6B',
          '\uE428'
        ]
      }, {
        'name': 'Two Men Holding Hands',
        'id': 'two_men_holding_hands',
        'image': '1f46c.png',
        'chars': [
          '\uD83D\uDC6C'
        ]
      }, {
        'name': 'Two Women Holding Hands',
        'id': 'two_women_holding_hands',
        'image': '1f46d.png',
        'chars': [
          '\uD83D\uDC6D'
        ]
      }, {
        'name': 'Police Officer',
        'id': 'police_officer',
        'image': '1f46e.png',
        'chars': [
          '\uD83D\uDC6E',
          '\uE152'
        ]
      }, {
        'name': 'Woman With Bunny Ears',
        'id': 'woman_with_bunny_ears',
        'image': '1f46f.png',
        'chars': [
          '\uD83D\uDC6F',
          '\uE429'
        ]
      }, {
        'name': 'Bride With Veil',
        'id': 'bride_with_veil',
        'image': '1f470.png',
        'chars': [
          '\uD83D\uDC70'
        ]
      }, {
        'name': 'Person With Bolnd Hair',
        'id': 'person_with_bolnd_hair',
        'image': '1f471.png',
        'chars': [
          '\uD83D\uDC71',
          '\uE515'
        ]
      }, {
        'name': 'Man With Gua Pi Mao',
        'id': 'man_with_gua_pi_mao',
        'image': '1f472.png',
        'chars': [
          '\uD83D\uDC72',
          '\uE516'
        ]
      }, {
        'name': 'Man With Turban',
        'id': 'man_with_turban',
        'image': '1f473.png',
        'chars': [
          '\uD83D\uDC73',
          '\uE517'
        ]
      }, {
        'name': 'Older Man',
        'id': 'older_man',
        'image': '1f474.png',
        'chars': [
          '\uD83D\uDC74',
          '\uE518'
        ]
      }, {
        'name': 'Older Woman',
        'id': 'older_woman',
        'image': '1f475.png',
        'chars': [
          '\uD83D\uDC75',
          '\uE519'
        ]
      }, {
        'name': 'Baby',
        'id': 'baby',
        'image': '1f476.png',
        'chars': [
          '\uD83D\uDC76',
          '\uE51A'
        ]
      }, {
        'name': 'Construction Worker',
        'id': 'construction_worker',
        'image': '1f477.png',
        'chars': [
          '\uD83D\uDC77',
          '\uE51B'
        ]
      }, {
        'name': 'Princess',
        'id': 'princess',
        'image': '1f478.png',
        'chars': [
          '\uD83D\uDC78',
          '\uE51C'
        ]
      }, {
        'name': 'Japanese Ogre',
        'id': 'japanese_ogre',
        'image': '1f479.png',
        'chars': [
          '\uD83D\uDC79'
        ]
      }, {
        'name': 'Japanese Goblin',
        'id': 'japanese_goblin',
        'image': '1f47a.png',
        'chars': [
          '\uD83D\uDC7A'
        ]
      }, {
        'name': 'Ghost',
        'id': 'ghost',
        'image': '1f47b.png',
        'chars': [
          '\uD83D\uDC7B',
          '\uE11B'
        ]
      }, {
        'name': 'Baby Angel',
        'id': 'baby_angel',
        'image': '1f47c.png',
        'chars': [
          '\uD83D\uDC7C',
          '\uE04E'
        ]
      }, {
        'name': 'Extraterrestrial Alien',
        'id': 'extraterrestrial_alien',
        'image': '1f47d.png',
        'chars': [
          '\uD83D\uDC7D',
          '\uE10C'
        ]
      }, {
        'name': 'Alien Monster',
        'id': 'alien_monster',
        'image': '1f47e.png',
        'chars': [
          '\uD83D\uDC7E',
          '\uE12B'
        ]
      }, {
        'name': 'Imp',
        'id': 'imp',
        'image': '1f47f.png',
        'chars': [
          '\uD83D\uDC7F',
          '\uE11A'
        ]
      }, {
        'name': 'Skull',
        'id': 'skull',
        'image': '1f480.png',
        'chars': [
          '\uD83D\uDC80',
          '\uE11C'
        ]
      }, {
        'name': 'Information Desk Person',
        'id': 'information_desk_person',
        'image': '1f481.png',
        'chars': [
          '\uD83D\uDC81',
          '\uE253'
        ]
      }, {
        'name': 'Guardsman',
        'id': 'guardsman',
        'image': '1f482.png',
        'chars': [
          '\uD83D\uDC82',
          '\uE51E'
        ]
      }, {
        'name': 'Dancer',
        'id': 'dancer',
        'image': '1f483.png',
        'chars': [
          '\uD83D\uDC83',
          '\uE51F'
        ]
      }, {
        'name': 'Lipstick',
        'id': 'lipstick',
        'image': '1f484.png',
        'chars': [
          '\uD83D\uDC84',
          '\uE31C'
        ]
      }, {
        'name': 'Nail Polish',
        'id': 'nail_polish',
        'image': '1f485.png',
        'chars': [
          '\uD83D\uDC85',
          '\uE31D'
        ]
      }, {
        'name': 'Face Massage',
        'id': 'face_massage',
        'image': '1f486.png',
        'chars': [
          '\uD83D\uDC86',
          '\uE31E'
        ]
      }, {
        'name': 'Haircut',
        'id': 'haircut',
        'image': '1f487.png',
        'chars': [
          '\uD83D\uDC87',
          '\uE31F'
        ]
      }, {
        'name': 'Barber Pole',
        'id': 'barber_pole',
        'image': '1f488.png',
        'chars': [
          '\uD83D\uDC88',
          '\uE320'
        ]
      }, {
        'name': 'Syringe',
        'id': 'syringe',
        'image': '1f489.png',
        'chars': [
          '\uD83D\uDC89',
          '\uE13B'
        ]
      }, {
        'name': 'Pill',
        'id': 'pill',
        'image': '1f48a.png',
        'chars': [
          '\uD83D\uDC8A',
          '\uE30F'
        ]
      }, {
        'name': 'Kiss Mark',
        'id': 'kiss_mark',
        'image': '1f48b.png',
        'chars': [
          '\uD83D\uDC8B',
          '\uE003'
        ]
      }, {
        'name': 'Love Letter',
        'id': 'love_letter',
        'image': '1f48c.png',
        'chars': [
          '\uD83D\uDC8C'
        ]
      }, {
        'name': 'Ring',
        'id': 'ring',
        'image': '1f48d.png',
        'chars': [
          '\uD83D\uDC8D',
          '\uE034'
        ]
      }, {
        'name': 'Gem Stone',
        'id': 'gem_stone',
        'image': '1f48e.png',
        'chars': [
          '\uD83D\uDC8E',
          '\uE035'
        ]
      }, {
        'name': 'Kiss',
        'id': 'kiss',
        'image': '1f48f.png',
        'chars': [
          '\uD83D\uDC8F',
          '\uE111'
        ]
      }, {
        'name': 'Bouquet',
        'id': 'bouquet',
        'image': '1f490.png',
        'chars': [
          '\uD83D\uDC90',
          '\uE306'
        ]
      }, {
        'name': 'Couple With Heart',
        'id': 'couple_with_heart',
        'image': '1f491.png',
        'chars': [
          '\uD83D\uDC91',
          '\uE425'
        ]
      }, {
        'name': 'Wedding',
        'id': 'wedding',
        'image': '1f492.png',
        'chars': [
          '\uD83D\uDC92',
          '\uE43D'
        ]
      }, {
        'name': 'Beating Heart',
        'id': 'beating_heart',
        'image': '1f493.png',
        'chars': [
          '\uD83D\uDC93',
          '\uE327'
        ]
      }, {
        'name': 'Broken Heart',
        'id': 'broken_heart',
        'image': '1f494.png',
        'chars': [
          '\uD83D\uDC94',
          '\uE023'
        ]
      }, {
        'name': 'Two Hearts',
        'id': 'two_hearts',
        'image': '1f495.png',
        'chars': [
          '\uD83D\uDC95'
        ]
      }, {
        'name': 'Sparkling Heart',
        'id': 'sparkling_heart',
        'image': '1f496.png',
        'chars': [
          '\uD83D\uDC96'
        ]
      }, {
        'name': 'Growing Heart',
        'id': 'growing_heart',
        'image': '1f497.png',
        'chars': [
          '\uD83D\uDC97',
          '\uE328'
        ]
      }, {
        'name': 'Heart With Arrow',
        'id': 'heart_with_arrow',
        'image': '1f498.png',
        'chars': [
          '\uD83D\uDC98',
          '\uE329'
        ]
      }, {
        'name': 'Blue Heart',
        'id': 'blue_heart',
        'image': '1f499.png',
        'chars': [
          '\uD83D\uDC99',
          '\uE32A'
        ]
      }, {
        'name': 'Green Heart',
        'id': 'green_heart',
        'image': '1f49a.png',
        'chars': [
          '\uD83D\uDC9A',
          '\uE32B'
        ]
      }, {
        'name': 'Yellow Heart',
        'id': 'yellow_heart',
        'image': '1f49b.png',
        'chars': [
          '\uD83D\uDC9B',
          '\uE32C'
        ]
      }, {
        'name': 'Purple Heart',
        'id': 'purple_heart',
        'image': '1f49c.png',
        'chars': [
          '\uD83D\uDC9C',
          '\uE32D'
        ]
      }, {
        'name': 'Heart With Ribbon',
        'id': 'heart_with_ribbon',
        'image': '1f49d.png',
        'chars': [
          '\uD83D\uDC9D',
          '\uE437'
        ]
      }, {
        'name': 'Revolving Hearts',
        'id': 'revolving_hearts',
        'image': '1f49e.png',
        'chars': [
          '\uD83D\uDC9E'
        ]
      }, {
        'name': 'Heart Decoration',
        'id': 'heart_decoration',
        'image': '1f49f.png',
        'chars': [
          '\uD83D\uDC9F',
          '\uE204'
        ]
      }, {
        'name': 'Diamond Shape With A Dot Inside',
        'id': 'diamond_shape_with_a_dot_inside',
        'image': '1f4a0.png',
        'chars': [
          '\uD83D\uDCA0'
        ]
      }, {
        'name': 'Electric Light Bulb',
        'id': 'electric_light_bulb',
        'image': '1f4a1.png',
        'chars': [
          '\uD83D\uDCA1',
          '\uE10F'
        ]
      }, {
        'name': 'Anger Symbol',
        'id': 'anger_symbol',
        'image': '1f4a2.png',
        'chars': [
          '\uD83D\uDCA2',
          '\uE334'
        ]
      }, {
        'name': 'Bomb',
        'id': 'bomb',
        'image': '1f4a3.png',
        'chars': [
          '\uD83D\uDCA3',
          '\uE311'
        ]
      }, {
        'name': 'Sleeping Symbol',
        'id': 'sleeping_symbol',
        'image': '1f4a4.png',
        'chars': [
          '\uD83D\uDCA4',
          '\uE13C'
        ]
      }, {
        'name': 'Collision Symbol',
        'id': 'collision_symbol',
        'image': '1f4a5.png',
        'chars': [
          '\uD83D\uDCA5'
        ]
      }, {
        'name': 'Splashing Sweat Symbol',
        'id': 'splashing_sweat_symbol',
        'image': '1f4a6.png',
        'chars': [
          '\uD83D\uDCA6',
          '\uE331'
        ]
      }, {
        'name': 'Droplet',
        'id': 'droplet',
        'image': '1f4a7.png',
        'chars': [
          '\uD83D\uDCA7'
        ]
      }, {
        'name': 'Dash Symbol',
        'id': 'dash_symbol',
        'image': '1f4a8.png',
        'chars': [
          '\uD83D\uDCA8',
          '\uE330'
        ]
      }, {
        'name': 'Pile Of Poo',
        'id': 'pile_of_poo',
        'image': '1f4a9.png',
        'chars': [
          '\uD83D\uDCA9',
          '\uE05A'
        ]
      }, {
        'name': 'Flexed Biceps',
        'id': 'flexed_biceps',
        'image': '1f4aa.png',
        'chars': [
          '\uD83D\uDCAA',
          '\uE14C'
        ]
      }, {
        'name': 'Dizzy Symbol',
        'id': 'dizzy_symbol',
        'image': '1f4ab.png',
        'chars': [
          '\uD83D\uDCAB'
        ]
      }, {
        'name': 'Speech Balloon',
        'id': 'speech_balloon',
        'image': '1f4ac.png',
        'chars': [
          '\uD83D\uDCAC'
        ]
      }, {
        'name': 'Thought Balloon',
        'id': 'thought_balloon',
        'image': '1f4ad.png',
        'chars': [
          '\uD83D\uDCAD'
        ]
      }, {
        'name': 'White Flower',
        'id': 'white_flower',
        'image': '1f4ae.png',
        'chars': [
          '\uD83D\uDCAE'
        ]
      }, {
        'name': 'Hundred Points Symbol',
        'id': 'hundred_points_symbol',
        'image': '1f4af.png',
        'chars': [
          '\uD83D\uDCAF'
        ]
      }, {
        'name': 'Money Bag',
        'id': 'money_bag',
        'image': '1f4b0.png',
        'chars': [
          '\uD83D\uDCB0',
          '\uE12F'
        ]
      }, {
        'name': 'Currency Exchange',
        'id': 'currency_exchange',
        'image': '1f4b1.png',
        'chars': [
          '\uD83D\uDCB1',
          '\uE149'
        ]
      }, {
        'name': 'Heavy Dollar Sign',
        'id': 'heavy_dollar_sign',
        'image': '1f4b2.png',
        'chars': [
          '\uD83D\uDCB2'
        ]
      }, {
        'name': 'Credit Card',
        'id': 'credit_card',
        'image': '1f4b3.png',
        'chars': [
          '\uD83D\uDCB3'
        ]
      }, {
        'name': 'Banknote With Yen Symbol',
        'id': 'banknote_with_yen_symbol',
        'image': '1f4b4.png',
        'chars': [
          '\uD83D\uDCB4'
        ]
      }, {
        'name': 'Banknote With Dollar Sign',
        'id': 'banknote_with_dollar_sign',
        'image': '1f4b5.png',
        'chars': [
          '\uD83D\uDCB5'
        ]
      }, {
        'name': 'Banknote With Euro Sign',
        'id': 'banknote_with_euro_sign',
        'image': '1f4b6.png',
        'chars': [
          '\uD83D\uDCB6'
        ]
      }, {
        'name': 'Banknote With Pound Sign',
        'id': 'banknote_with_pound_sign',
        'image': '1f4b7.png',
        'chars': [
          '\uD83D\uDCB7'
        ]
      }, {
        'name': 'Money With Wings',
        'id': 'money_with_wings',
        'image': '1f4b8.png',
        'chars': [
          '\uD83D\uDCB8'
        ]
      }, {
        'name': 'Chart With Upwards Trend And Yen Sign',
        'id': 'chart_with_upwards_trend_and_yen_sign',
        'image': '1f4b9.png',
        'chars': [
          '\uD83D\uDCB9',
          '\uE14A'
        ]
      }, {
        'name': 'Seat',
        'id': 'seat',
        'image': '1f4ba.png',
        'chars': [
          '\uD83D\uDCBA',
          '\uE11F'
        ]
      }, {
        'name': 'Personal Computer',
        'id': 'personal_computer',
        'image': '1f4bb.png',
        'chars': [
          '\uD83D\uDCBB',
          '\uE00C'
        ]
      }, {
        'name': 'Briefcase',
        'id': 'briefcase',
        'image': '1f4bc.png',
        'chars': [
          '\uD83D\uDCBC',
          '\uE11E'
        ]
      }, {
        'name': 'Minidisc',
        'id': 'minidisc',
        'image': '1f4bd.png',
        'chars': [
          '\uD83D\uDCBD',
          '\uE316'
        ]
      }, {
        'name': 'Floppy Disk',
        'id': 'floppy_disk',
        'image': '1f4be.png',
        'chars': [
          '\uD83D\uDCBE'
        ]
      }, {
        'name': 'Optical Disc',
        'id': 'optical_disc',
        'image': '1f4bf.png',
        'chars': [
          '\uD83D\uDCBF',
          '\uE126'
        ]
      }, {
        'name': 'Dvd',
        'id': 'dvd',
        'image': '1f4c0.png',
        'chars': [
          '\uD83D\uDCC0',
          '\uE127'
        ]
      }, {
        'name': 'File Folder',
        'id': 'file_folder',
        'image': '1f4c1.png',
        'chars': [
          '\uD83D\uDCC1'
        ]
      }, {
        'name': 'Open File Folder',
        'id': 'open_file_folder',
        'image': '1f4c2.png',
        'chars': [
          '\uD83D\uDCC2'
        ]
      }, {
        'name': 'Page With Curl',
        'id': 'page_with_curl',
        'image': '1f4c3.png',
        'chars': [
          '\uD83D\uDCC3'
        ]
      }, {
        'name': 'Page Facing Up',
        'id': 'page_facing_up',
        'image': '1f4c4.png',
        'chars': [
          '\uD83D\uDCC4'
        ]
      }, {
        'name': 'Calendar',
        'id': 'calendar',
        'image': '1f4c5.png',
        'chars': [
          '\uD83D\uDCC5'
        ]
      }, {
        'name': 'Tear-Off Calendar',
        'id': 'tear-off_calendar',
        'image': '1f4c6.png',
        'chars': [
          '\uD83D\uDCC6'
        ]
      }, {
        'name': 'Card Index',
        'id': 'card_index',
        'image': '1f4c7.png',
        'chars': [
          '\uD83D\uDCC7'
        ]
      }, {
        'name': 'Chart With Upwards Trend',
        'id': 'chart_with_upwards_trend',
        'image': '1f4c8.png',
        'chars': [
          '\uD83D\uDCC8'
        ]
      }, {
        'name': 'Chart With Downwards Trend',
        'id': 'chart_with_downwards_trend',
        'image': '1f4c9.png',
        'chars': [
          '\uD83D\uDCC9'
        ]
      }, {
        'name': 'Bar Chart',
        'id': 'bar_chart',
        'image': '1f4ca.png',
        'chars': [
          '\uD83D\uDCCA'
        ]
      }, {
        'name': 'Clipboard',
        'id': 'clipboard',
        'image': '1f4cb.png',
        'chars': [
          '\uD83D\uDCCB'
        ]
      }, {
        'name': 'Pushpin',
        'id': 'pushpin',
        'image': '1f4cc.png',
        'chars': [
          '\uD83D\uDCCC'
        ]
      }, {
        'name': 'Round Pushpin',
        'id': 'round_pushpin',
        'image': '1f4cd.png',
        'chars': [
          '\uD83D\uDCCD'
        ]
      }, {
        'name': 'Paperclip',
        'id': 'paperclip',
        'image': '1f4ce.png',
        'chars': [
          '\uD83D\uDCCE'
        ]
      }, {
        'name': 'Straight Ruler',
        'id': 'straight_ruler',
        'image': '1f4cf.png',
        'chars': [
          '\uD83D\uDCCF'
        ]
      }, {
        'name': 'Triangular Ruler',
        'id': 'triangular_ruler',
        'image': '1f4d0.png',
        'chars': [
          '\uD83D\uDCD0'
        ]
      }, {
        'name': 'Bookmark Tabs',
        'id': 'bookmark_tabs',
        'image': '1f4d1.png',
        'chars': [
          '\uD83D\uDCD1'
        ]
      }, {
        'name': 'Ledger',
        'id': 'ledger',
        'image': '1f4d2.png',
        'chars': [
          '\uD83D\uDCD2'
        ]
      }, {
        'name': 'Notebook',
        'id': 'notebook',
        'image': '1f4d3.png',
        'chars': [
          '\uD83D\uDCD3'
        ]
      }, {
        'name': 'Notebook With Decorative Cover',
        'id': 'notebook_with_decorative_cover',
        'image': '1f4d4.png',
        'chars': [
          '\uD83D\uDCD4'
        ]
      }, {
        'name': 'Closed Book',
        'id': 'closed_book',
        'image': '1f4d5.png',
        'chars': [
          '\uD83D\uDCD5'
        ]
      }, {
        'name': 'Open Book',
        'id': 'open_book',
        'image': '1f4d6.png',
        'chars': [
          '\uD83D\uDCD6',
          '\uE148'
        ]
      }, {
        'name': 'Green Book',
        'id': 'green_book',
        'image': '1f4d7.png',
        'chars': [
          '\uD83D\uDCD7'
        ]
      }, {
        'name': 'Blue Book',
        'id': 'blue_book',
        'image': '1f4d8.png',
        'chars': [
          '\uD83D\uDCD8'
        ]
      }, {
        'name': 'Orange Book',
        'id': 'orange_book',
        'image': '1f4d9.png',
        'chars': [
          '\uD83D\uDCD9'
        ]
      }, {
        'name': 'Books',
        'id': 'books',
        'image': '1f4da.png',
        'chars': [
          '\uD83D\uDCDA'
        ]
      }, {
        'name': 'Name Badge',
        'id': 'name_badge',
        'image': '1f4db.png',
        'chars': [
          '\uD83D\uDCDB'
        ]
      }, {
        'name': 'Scroll',
        'id': 'scroll',
        'image': '1f4dc.png',
        'chars': [
          '\uD83D\uDCDC'
        ]
      }, {
        'name': 'Memo',
        'id': 'memo',
        'image': '1f4dd.png',
        'chars': [
          '\uD83D\uDCDD',
          '\uE301'
        ]
      }, {
        'name': 'Telephone Receiver',
        'id': 'telephone_receiver',
        'image': '1f4de.png',
        'chars': [
          '\uD83D\uDCDE'
        ]
      }, {
        'name': 'Pager',
        'id': 'pager',
        'image': '1f4df.png',
        'chars': [
          '\uD83D\uDCDF'
        ]
      }, {
        'name': 'Fax Machine',
        'id': 'fax_machine',
        'image': '1f4e0.png',
        'chars': [
          '\uD83D\uDCE0',
          '\uE00B'
        ]
      }, {
        'name': 'Satellite Antenna',
        'id': 'satellite_antenna',
        'image': '1f4e1.png',
        'chars': [
          '\uD83D\uDCE1',
          '\uE14B'
        ]
      }, {
        'name': 'Public Address Loudspeaker',
        'id': 'public_address_loudspeaker',
        'image': '1f4e2.png',
        'chars': [
          '\uD83D\uDCE2',
          '\uE142'
        ]
      }, {
        'name': 'Cheering Megaphone',
        'id': 'cheering_megaphone',
        'image': '1f4e3.png',
        'chars': [
          '\uD83D\uDCE3',
          '\uE317'
        ]
      }, {
        'name': 'Outbox Tray',
        'id': 'outbox_tray',
        'image': '1f4e4.png',
        'chars': [
          '\uD83D\uDCE4'
        ]
      }, {
        'name': 'Inbox Tray',
        'id': 'inbox_tray',
        'image': '1f4e5.png',
        'chars': [
          '\uD83D\uDCE5'
        ]
      }, {
        'name': 'Package',
        'id': 'package',
        'image': '1f4e6.png',
        'chars': [
          '\uD83D\uDCE6'
        ]
      }, {
        'name': 'E-Mail Symbol',
        'id': 'e-mail_symbol',
        'image': '1f4e7.png',
        'chars': [
          '\uD83D\uDCE7'
        ]
      }, {
        'name': 'Incoming Envelope',
        'id': 'incoming_envelope',
        'image': '1f4e8.png',
        'chars': [
          '\uD83D\uDCE8'
        ]
      }, {
        'name': 'Envelope With Downwards Arrow Above',
        'id': 'envelope_with_downwards_arrow_above',
        'image': '1f4e9.png',
        'chars': [
          '\uD83D\uDCE9',
          '\uE103'
        ]
      }, {
        'name': 'Closed Mailbox With Lowered Flag',
        'id': 'closed_mailbox_with_lowered_flag',
        'image': '1f4ea.png',
        'chars': [
          '\uD83D\uDCEA'
        ]
      }, {
        'name': 'Closed Mailbox With Raised Flag',
        'id': 'closed_mailbox_with_raised_flag',
        'image': '1f4eb.png',
        'chars': [
          '\uD83D\uDCEB',
          '\uE101'
        ]
      }, {
        'name': 'Open Mailbox With Raised Flag',
        'id': 'open_mailbox_with_raised_flag',
        'image': '1f4ec.png',
        'chars': [
          '\uD83D\uDCEC'
        ]
      }, {
        'name': 'Open Mailbox With Lowered Flag',
        'id': 'open_mailbox_with_lowered_flag',
        'image': '1f4ed.png',
        'chars': [
          '\uD83D\uDCED'
        ]
      }, {
        'name': 'Postbox',
        'id': 'postbox',
        'image': '1f4ee.png',
        'chars': [
          '\uD83D\uDCEE',
          '\uE102'
        ]
      }, {
        'name': 'Postal Horn',
        'id': 'postal_horn',
        'image': '1f4ef.png',
        'chars': [
          '\uD83D\uDCEF'
        ]
      }, {
        'name': 'Newspaper',
        'id': 'newspaper',
        'image': '1f4f0.png',
        'chars': [
          '\uD83D\uDCF0'
        ]
      }, {
        'name': 'Mobile Phone',
        'id': 'mobile_phone',
        'image': '1f4f1.png',
        'chars': [
          '\uD83D\uDCF1',
          '\uE00A'
        ]
      }, {
        'name': 'Mobile Phone With Rightwards Arrow',
        'id': 'mobile_phone_with_rightwards_arrow',
        'image': '1f4f2.png',
        'chars': [
          '\uD83D\uDCF2',
          '\uE104'
        ]
      }, {
        'name': 'Vibration Mode',
        'id': 'vibration_mode',
        'image': '1f4f3.png',
        'chars': [
          '\uD83D\uDCF3',
          '\uE250'
        ]
      }, {
        'name': 'Mobile Phone Off',
        'id': 'mobile_phone_off',
        'image': '1f4f4.png',
        'chars': [
          '\uD83D\uDCF4',
          '\uE251'
        ]
      }, {
        'name': 'No Mobile Phones',
        'id': 'no_mobile_phones',
        'image': '1f4f5.png',
        'chars': [
          '\uD83D\uDCF5'
        ]
      }, {
        'name': 'Antenna With Bars',
        'id': 'antenna_with_bars',
        'image': '1f4f6.png',
        'chars': [
          '\uD83D\uDCF6',
          '\uE20B'
        ]
      }, {
        'name': 'Camera',
        'id': 'camera',
        'image': '1f4f7.png',
        'chars': [
          '\uD83D\uDCF7',
          '\uE008'
        ]
      }, {
        'name': 'Video Camera',
        'id': 'video_camera',
        'image': '1f4f9.png',
        'chars': [
          '\uD83D\uDCF9'
        ]
      }, {
        'name': 'Television',
        'id': 'television',
        'image': '1f4fa.png',
        'chars': [
          '\uD83D\uDCFA',
          '\uE12A'
        ]
      }, {
        'name': 'Radio',
        'id': 'radio',
        'image': '1f4fb.png',
        'chars': [
          '\uD83D\uDCFB',
          '\uE128'
        ]
      }, {
        'name': 'Videocassette',
        'id': 'videocassette',
        'image': '1f4fc.png',
        'chars': [
          '\uD83D\uDCFC',
          '\uE129'
        ]
      }, {
        'name': 'Twisted Rightwards Arrows',
        'id': 'twisted_rightwards_arrows',
        'image': '1f500.png',
        'chars': [
          '\uD83D\uDD00'
        ]
      }, {
        'name': 'Clockwise Rightwards And Leftwards Open Circle Arrows',
        'id': 'clockwise_rightwards_and_leftwards_open_circle_arrows',
        'image': '1f501.png',
        'chars': [
          '\uD83D\uDD01'
        ]
      }, {
        'name': 'Clockwise Rightwards And Leftwards Open Circle Arrows With Circled One Overlay',
        'id': 'clockwise_rightwards_and_leftwards_open_circle_arrows_with_circled_one_overlay',
        'image': '1f502.png',
        'chars': [
          '\uD83D\uDD02'
        ]
      }, {
        'name': 'Clockwise Downwards And Upwards Open Circle Arrows',
        'id': 'clockwise_downwards_and_upwards_open_circle_arrows',
        'image': '1f503.png',
        'chars': [
          '\uD83D\uDD03'
        ]
      }, {
        'name': 'Anticlockwise Downwards And Upwards Open Circle Arrows',
        'id': 'anticlockwise_downwards_and_upwards_open_circle_arrows',
        'image': '1f504.png',
        'chars': [
          '\uD83D\uDD04'
        ]
      }, {
        'name': 'Low Brightness Symbols',
        'id': 'low_brightness_symbols',
        'image': '1f505.png',
        'chars': [
          '\uD83D\uDD05'
        ]
      }, {
        'name': 'High Brightness Symbols',
        'id': 'high_brightness_symbols',
        'image': '1f506.png',
        'chars': [
          '\uD83D\uDD06'
        ]
      }, {
        'name': 'Speaker With Cancellation Stroke',
        'id': 'speaker_with_cancellation_stroke',
        'image': '1f507.png',
        'chars': [
          '\uD83D\uDD07'
        ]
      }, {
        'name': 'Speaker',
        'id': 'speaker',
        'image': '1f508.png',
        'chars': [
          '\uD83D\uDD08'
        ]
      }, {
        'name': 'Speaker With One Sound Wave',
        'id': 'speaker_with_one_sound_wave',
        'image': '1f509.png',
        'chars': [
          '\uD83D\uDD09'
        ]
      }, {
        'name': 'Speaker With Three Sound Waves',
        'id': 'speaker_with_three_sound_waves',
        'image': '1f50a.png',
        'chars': [
          '\uD83D\uDD0A',
          '\uE141'
        ]
      }, {
        'name': 'Battery',
        'id': 'battery',
        'image': '1f50b.png',
        'chars': [
          '\uD83D\uDD0B'
        ]
      }, {
        'name': 'Electric Plug',
        'id': 'electric_plug',
        'image': '1f50c.png',
        'chars': [
          '\uD83D\uDD0C'
        ]
      }, {
        'name': 'Left-Pointing Magnifying Glass',
        'id': 'left-pointing_magnifying_glass',
        'image': '1f50d.png',
        'chars': [
          '\uD83D\uDD0D',
          '\uE114'
        ]
      }, {
        'name': 'Right Pointing Magnifying Glass',
        'id': 'right_pointing_magnifying_glass',
        'image': '1f50e.png',
        'chars': [
          '\uD83D\uDD0E'
        ]
      }, {
        'name': 'Lock With Ink Pen',
        'id': 'lock_with_ink_pen',
        'image': '1f50f.png',
        'chars': [
          '\uD83D\uDD0F'
        ]
      }, {
        'name': 'Closed Lock With Key',
        'id': 'closed_lock_with_key',
        'image': '1f510.png',
        'chars': [
          '\uD83D\uDD10'
        ]
      }, {
        'name': 'Key',
        'id': 'key',
        'image': '1f511.png',
        'chars': [
          '\uD83D\uDD11',
          '\uE03F'
        ]
      }, {
        'name': 'Lock',
        'id': 'lock',
        'image': '1f512.png',
        'chars': [
          '\uD83D\uDD12',
          '\uE144'
        ]
      }, {
        'name': 'Open Lock',
        'id': 'open_lock',
        'image': '1f513.png',
        'chars': [
          '\uD83D\uDD13',
          '\uE145'
        ]
      }, {
        'name': 'Bell',
        'id': 'bell',
        'image': '1f514.png',
        'chars': [
          '\uD83D\uDD14',
          '\uE325'
        ]
      }, {
        'name': 'Bell With Cancellation Stroke',
        'id': 'bell_with_cancellation_stroke',
        'image': '1f515.png',
        'chars': [
          '\uD83D\uDD15'
        ]
      }, {
        'name': 'Bookmark',
        'id': 'bookmark',
        'image': '1f516.png',
        'chars': [
          '\uD83D\uDD16'
        ]
      }, {
        'name': 'Link Symbol',
        'id': 'link_symbol',
        'image': '1f517.png',
        'chars': [
          '\uD83D\uDD17'
        ]
      }, {
        'name': 'Radio Button',
        'id': 'radio_button',
        'image': '1f518.png',
        'chars': [
          '\uD83D\uDD18'
        ]
      }, {
        'name': 'Back With Leftwards Arrow Above',
        'id': 'back_with_leftwards_arrow_above',
        'image': '1f519.png',
        'chars': [
          '\uD83D\uDD19'
        ]
      }, {
        'name': 'End With Leftwards Arrow Above',
        'id': 'end_with_leftwards_arrow_above',
        'image': '1f51a.png',
        'chars': [
          '\uD83D\uDD1A'
        ]
      }, {
        'name': 'On With Exclamation Mark With Left Right Arrow Above',
        'id': 'on_with_exclamation_mark_with_left_right_arrow_above',
        'image': '1f51b.png',
        'chars': [
          '\uD83D\uDD1B'
        ]
      }, {
        'name': 'Soon With Rightwards Arrow Above',
        'id': 'soon_with_rightwards_arrow_above',
        'image': '1f51c.png',
        'chars': [
          '\uD83D\uDD1C'
        ]
      }, {
        'name': 'Top With Upwards Arrow Above',
        'id': 'top_with_upwards_arrow_above',
        'image': '1f51d.png',
        'chars': [
          '\uD83D\uDD1D',
          '\uE24C'
        ]
      }, {
        'name': 'No One Under Eighteen Symbol',
        'id': 'no_one_under_eighteen_symbol',
        'image': '1f51e.png',
        'chars': [
          '\uD83D\uDD1E',
          '\uE207'
        ]
      }, {
        'name': 'Keycap Ten',
        'id': 'keycap_ten',
        'image': '1f51f.png',
        'chars': [
          '\uD83D\uDD1F'
        ]
      }, {
        'name': 'Input Symbol For Latin Capital Letters',
        'id': 'input_symbol_for_latin_capital_letters',
        'image': '1f520.png',
        'chars': [
          '\uD83D\uDD20'
        ]
      }, {
        'name': 'Input Symbol For Latin Small Letters',
        'id': 'input_symbol_for_latin_small_letters',
        'image': '1f521.png',
        'chars': [
          '\uD83D\uDD21'
        ]
      }, {
        'name': 'Input Symbol For Numbers',
        'id': 'input_symbol_for_numbers',
        'image': '1f522.png',
        'chars': [
          '\uD83D\uDD22'
        ]
      }, {
        'name': 'Input Symbol For Symbols',
        'id': 'input_symbol_for_symbols',
        'image': '1f523.png',
        'chars': [
          '\uD83D\uDD23'
        ]
      }, {
        'name': 'Input Symbol For Latin Letters',
        'id': 'input_symbol_for_latin_letters',
        'image': '1f524.png',
        'chars': [
          '\uD83D\uDD24'
        ]
      }, {
        'name': 'Fire',
        'id': 'fire',
        'image': '1f525.png',
        'chars': [
          '\uD83D\uDD25',
          '\uE11D'
        ]
      }, {
        'name': 'Electric Torch',
        'id': 'electric_torch',
        'image': '1f526.png',
        'chars': [
          '\uD83D\uDD26'
        ]
      }, {
        'name': 'Wrench',
        'id': 'wrench',
        'image': '1f527.png',
        'chars': [
          '\uD83D\uDD27'
        ]
      }, {
        'name': 'Hammer',
        'id': 'hammer',
        'image': '1f528.png',
        'chars': [
          '\uD83D\uDD28',
          '\uE116'
        ]
      }, {
        'name': 'Nut And Bolt',
        'id': 'nut_and_bolt',
        'image': '1f529.png',
        'chars': [
          '\uD83D\uDD29'
        ]
      }, {
        'name': 'Hocho',
        'id': 'hocho',
        'image': '1f52a.png',
        'chars': [
          '\uD83D\uDD2A'
        ]
      }, {
        'name': 'Pistol',
        'id': 'pistol',
        'image': '1f52b.png',
        'chars': [
          '\uD83D\uDD2B',
          '\uE113'
        ]
      }, {
        'name': 'Microscope',
        'id': 'microscope',
        'image': '1f52c.png',
        'chars': [
          '\uD83D\uDD2C'
        ]
      }, {
        'name': 'Telescope',
        'id': 'telescope',
        'image': '1f52d.png',
        'chars': [
          '\uD83D\uDD2D'
        ]
      }, {
        'name': 'Crystal Ball',
        'id': 'crystal_ball',
        'image': '1f52e.png',
        'chars': [
          '\uD83D\uDD2E'
        ]
      }, {
        'name': 'Six Pointed Star With Middle Dot',
        'id': 'six_pointed_star_with_middle_dot',
        'image': '1f52f.png',
        'chars': [
          '\uD83D\uDD2F',
          '\uE23E'
        ]
      }, {
        'name': 'Japanese Symbol For Beginner',
        'id': 'japanese_symbol_for_beginner',
        'image': '1f530.png',
        'chars': [
          '\uD83D\uDD30',
          '\uE209'
        ]
      }, {
        'name': 'Trident Emblem',
        'id': 'trident_emblem',
        'image': '1f531.png',
        'chars': [
          '\uD83D\uDD31',
          '\uE031'
        ]
      }, {
        'name': 'Black Square Button',
        'id': 'black_square_button',
        'image': '1f532.png',
        'chars': [
          '\uD83D\uDD32',
          '\uE21A'
        ]
      }, {
        'name': 'White Square Button',
        'id': 'white_square_button',
        'image': '1f533.png',
        'chars': [
          '\uD83D\uDD33',
          '\uE21B'
        ]
      }, {
        'name': 'Large Red Circle',
        'id': 'large_red_circle',
        'image': '1f534.png',
        'chars': [
          '\uD83D\uDD34',
          '\uE219'
        ]
      }, {
        'name': 'Large Blue Circle',
        'id': 'large_blue_circle',
        'image': '1f535.png',
        'chars': [
          '\uD83D\uDD35'
        ]
      }, {
        'name': 'Large Orange Diamond',
        'id': 'large_orange_diamond',
        'image': '1f536.png',
        'chars': [
          '\uD83D\uDD36'
        ]
      }, {
        'name': 'Large Blue Diamond',
        'id': 'large_blue_diamond',
        'image': '1f537.png',
        'chars': [
          '\uD83D\uDD37'
        ]
      }, {
        'name': 'Small Orange Diamond',
        'id': 'small_orange_diamond',
        'image': '1f538.png',
        'chars': [
          '\uD83D\uDD38'
        ]
      }, {
        'name': 'Small Blue Diamond',
        'id': 'small_blue_diamond',
        'image': '1f539.png',
        'chars': [
          '\uD83D\uDD39'
        ]
      }, {
        'name': 'Up-Pointing Red Triangle',
        'id': 'up-pointing_red_triangle',
        'image': '1f53a.png',
        'chars': [
          '\uD83D\uDD3A'
        ]
      }, {
        'name': 'Down-Pointing Red Triangle',
        'id': 'down-pointing_red_triangle',
        'image': '1f53b.png',
        'chars': [
          '\uD83D\uDD3B'
        ]
      }, {
        'name': 'Up-Pointing Small Red Triangle',
        'id': 'up-pointing_small_red_triangle',
        'image': '1f53c.png',
        'chars': [
          '\uD83D\uDD3C'
        ]
      }, {
        'name': 'Down-Pointing Small Red Triangle',
        'id': 'down-pointing_small_red_triangle',
        'image': '1f53d.png',
        'chars': [
          '\uD83D\uDD3D'
        ]
      }, {
        'name': 'Clock Face One Oclock',
        'id': 'clock_face_one_oclock',
        'image': '1f550.png',
        'chars': [
          '\uD83D\uDD50',
          '\uE024'
        ]
      }, {
        'name': 'Clock Face Two Oclock',
        'id': 'clock_face_two_oclock',
        'image': '1f551.png',
        'chars': [
          '\uD83D\uDD51',
          '\uE025'
        ]
      }, {
        'name': 'Clock Face Three Oclock',
        'id': 'clock_face_three_oclock',
        'image': '1f552.png',
        'chars': [
          '\uD83D\uDD52',
          '\uE026'
        ]
      }, {
        'name': 'Clock Face Four Oclock',
        'id': 'clock_face_four_oclock',
        'image': '1f553.png',
        'chars': [
          '\uD83D\uDD53',
          '\uE027'
        ]
      }, {
        'name': 'Clock Face Five Oclock',
        'id': 'clock_face_five_oclock',
        'image': '1f554.png',
        'chars': [
          '\uD83D\uDD54',
          '\uE028'
        ]
      }, {
        'name': 'Clock Face Six Oclock',
        'id': 'clock_face_six_oclock',
        'image': '1f555.png',
        'chars': [
          '\uD83D\uDD55',
          '\uE029'
        ]
      }, {
        'name': 'Clock Face Seven Oclock',
        'id': 'clock_face_seven_oclock',
        'image': '1f556.png',
        'chars': [
          '\uD83D\uDD56',
          '\uE02A'
        ]
      }, {
        'name': 'Clock Face Eight Oclock',
        'id': 'clock_face_eight_oclock',
        'image': '1f557.png',
        'chars': [
          '\uD83D\uDD57',
          '\uE02B'
        ]
      }, {
        'name': 'Clock Face Nine Oclock',
        'id': 'clock_face_nine_oclock',
        'image': '1f558.png',
        'chars': [
          '\uD83D\uDD58',
          '\uE02C'
        ]
      }, {
        'name': 'Clock Face Ten Oclock',
        'id': 'clock_face_ten_oclock',
        'image': '1f559.png',
        'chars': [
          '\uD83D\uDD59',
          '\uE02D'
        ]
      }, {
        'name': 'Clock Face Eleven Oclock',
        'id': 'clock_face_eleven_oclock',
        'image': '1f55a.png',
        'chars': [
          '\uD83D\uDD5A',
          '\uE02E'
        ]
      }, {
        'name': 'Clock Face Twelve Oclock',
        'id': 'clock_face_twelve_oclock',
        'image': '1f55b.png',
        'chars': [
          '\uD83D\uDD5B',
          '\uE02F'
        ]
      }, {
        'name': 'Clock Face One-Thirty',
        'id': 'clock_face_one-thirty',
        'image': '1f55c.png',
        'chars': [
          '\uD83D\uDD5C'
        ]
      }, {
        'name': 'Clock Face Two-Thirty',
        'id': 'clock_face_two-thirty',
        'image': '1f55d.png',
        'chars': [
          '\uD83D\uDD5D'
        ]
      }, {
        'name': 'Clock Face Three-Thirty',
        'id': 'clock_face_three-thirty',
        'image': '1f55e.png',
        'chars': [
          '\uD83D\uDD5E'
        ]
      }, {
        'name': 'Clock Face Four-Thirty',
        'id': 'clock_face_four-thirty',
        'image': '1f55f.png',
        'chars': [
          '\uD83D\uDD5F'
        ]
      }, {
        'name': 'Clock Face Five-Thirty',
        'id': 'clock_face_five-thirty',
        'image': '1f560.png',
        'chars': [
          '\uD83D\uDD60'
        ]
      }, {
        'name': 'Clock Face Six-Thirty',
        'id': 'clock_face_six-thirty',
        'image': '1f561.png',
        'chars': [
          '\uD83D\uDD61'
        ]
      }, {
        'name': 'Clock Face Seven-Thirty',
        'id': 'clock_face_seven-thirty',
        'image': '1f562.png',
        'chars': [
          '\uD83D\uDD62'
        ]
      }, {
        'name': 'Clock Face Eight-Thirty',
        'id': 'clock_face_eight-thirty',
        'image': '1f563.png',
        'chars': [
          '\uD83D\uDD63'
        ]
      }, {
        'name': 'Clock Face Nine-Thirty',
        'id': 'clock_face_nine-thirty',
        'image': '1f564.png',
        'chars': [
          '\uD83D\uDD64'
        ]
      }, {
        'name': 'Clock Face Ten-Thirty',
        'id': 'clock_face_ten-thirty',
        'image': '1f565.png',
        'chars': [
          '\uD83D\uDD65'
        ]
      }, {
        'name': 'Clock Face Eleven-Thirty',
        'id': 'clock_face_eleven-thirty',
        'image': '1f566.png',
        'chars': [
          '\uD83D\uDD66'
        ]
      }, {
        'name': 'Clock Face Twelve-Thirty',
        'id': 'clock_face_twelve-thirty',
        'image': '1f567.png',
        'chars': [
          '\uD83D\uDD67'
        ]
      }, {
        'name': 'Mount Fuji',
        'id': 'mount_fuji',
        'image': '1f5fb.png',
        'chars': [
          '\uD83D\uDDFB',
          '\uE03B'
        ]
      }, {
        'name': 'Tokyo Tower',
        'id': 'tokyo_tower',
        'image': '1f5fc.png',
        'chars': [
          '\uD83D\uDDFC',
          '\uE509'
        ]
      }, {
        'name': 'Statue Of Liberty',
        'id': 'statue_of_liberty',
        'image': '1f5fd.png',
        'chars': [
          '\uD83D\uDDFD',
          '\uE51D'
        ]
      }, {
        'name': 'Silhouette Of Japan',
        'id': 'silhouette_of_japan',
        'image': '1f5fe.png',
        'chars': [
          '\uD83D\uDDFE'
        ]
      }, {
        'name': 'Moyai',
        'id': 'moyai',
        'image': '1f5ff.png',
        'chars': [
          '\uD83D\uDDFF'
        ]
      }, {
        'name': 'Grinning Face',
        'id': 'grinning_face',
        'image': '1f600.png',
        'chars': [
          '\uD83D\uDE00'
        ]
      }, {
        'name': 'Grinning Face With Smiling Eyes',
        'id': 'grinning_face_with_smiling_eyes',
        'image': '1f601.png',
        'chars': [
          '\uD83D\uDE01',
          '\uE404'
        ]
      }, {
        'name': 'Face With Tears Of Joy',
        'id': 'face_with_tears_of_joy',
        'image': '1f602.png',
        'chars': [
          '\uD83D\uDE02',
          '\uE412'
        ]
      }, {
        'name': 'Smiling Face With Open Mouth',
        'id': 'smiling_face_with_open_mouth',
        'image': '1f603.png',
        'chars': [
          '\uD83D\uDE03',
          '\uE057'
        ]
      }, {
        'name': 'Smiling Face With Open Mouth And Smiling Eyes',
        'id': 'smiling_face_with_open_mouth_and_smiling_eyes',
        'image': '1f604.png',
        'chars': [
          '\uD83D\uDE04',
          '\uE415'
        ]
      }, {
        'name': 'Smiling Face With Open Mouth And Cold Sweat',
        'id': 'smiling_face_with_open_mouth_and_cold_sweat',
        'image': '1f605.png',
        'chars': [
          '\uD83D\uDE05'
        ]
      }, {
        'name': 'Smiling Face With Open Mouth And Tightly-Closed Eyes',
        'id': 'smiling_face_with_open_mouth_and_tightly-closed_eyes',
        'image': '1f606.png',
        'chars': [
          '\uD83D\uDE06'
        ]
      }, {
        'name': 'Smiling Face With Halo',
        'id': 'smiling_face_with_halo',
        'image': '1f607.png',
        'chars': [
          '\uD83D\uDE07'
        ]
      }, {
        'name': 'Smiling Face With Horns',
        'id': 'smiling_face_with_horns',
        'image': '1f608.png',
        'chars': [
          '\uD83D\uDE08'
        ]
      }, {
        'name': 'Winking Face',
        'id': 'winking_face',
        'image': '1f609.png',
        'chars': [
          '\uD83D\uDE09',
          '\uE405'
        ]
      }, {
        'name': 'Smiling Face With Smiling Eyes',
        'id': 'smiling_face_with_smiling_eyes',
        'image': '1f60a.png',
        'chars': [
          '\uD83D\uDE0A',
          '\uE056'
        ]
      }, {
        'name': 'Face Savouring Delicious Food',
        'id': 'face_savouring_delicious_food',
        'image': '1f60b.png',
        'chars': [
          '\uD83D\uDE0B'
        ]
      }, {
        'name': 'Relieved Face',
        'id': 'relieved_face',
        'image': '1f60c.png',
        'chars': [
          '\uD83D\uDE0C',
          '\uE40A'
        ]
      }, {
        'name': 'Smiling Face With Heart-Shaped Eyes',
        'id': 'smiling_face_with_heart-shaped_eyes',
        'image': '1f60d.png',
        'chars': [
          '\uD83D\uDE0D',
          '\uE106'
        ]
      }, {
        'name': 'Smiling Face With Sunglasses',
        'id': 'smiling_face_with_sunglasses',
        'image': '1f60e.png',
        'chars': [
          '\uD83D\uDE0E'
        ]
      }, {
        'name': 'Smirking Face',
        'id': 'smirking_face',
        'image': '1f60f.png',
        'chars': [
          '\uD83D\uDE0F',
          '\uE402'
        ]
      }, {
        'name': 'Neutral Face',
        'id': 'neutral_face',
        'image': '1f610.png',
        'chars': [
          '\uD83D\uDE10'
        ]
      }, {
        'name': 'Expressionless Face',
        'id': 'expressionless_face',
        'image': '1f611.png',
        'chars': [
          '\uD83D\uDE11'
        ]
      }, {
        'name': 'Unamused Face',
        'id': 'unamused_face',
        'image': '1f612.png',
        'chars': [
          '\uD83D\uDE12',
          '\uE40E'
        ]
      }, {
        'name': 'Face With Cold Sweat',
        'id': 'face_with_cold_sweat',
        'image': '1f613.png',
        'chars': [
          '\uD83D\uDE13',
          '\uE108'
        ]
      }, {
        'name': 'Pensive Face',
        'id': 'pensive_face',
        'image': '1f614.png',
        'chars': [
          '\uD83D\uDE14',
          '\uE403'
        ]
      }, {
        'name': 'Confused Face',
        'id': 'confused_face',
        'image': '1f615.png',
        'chars': [
          '\uD83D\uDE15'
        ]
      }, {
        'name': 'Confounded Face',
        'id': 'confounded_face',
        'image': '1f616.png',
        'chars': [
          '\uD83D\uDE16',
          '\uE407'
        ]
      }, {
        'name': 'Kissing Face',
        'id': 'kissing_face',
        'image': '1f617.png',
        'chars': [
          '\uD83D\uDE17'
        ]
      }, {
        'name': 'Face Throwing A Kiss',
        'id': 'face_throwing_a_kiss',
        'image': '1f618.png',
        'chars': [
          '\uD83D\uDE18',
          '\uE418'
        ]
      }, {
        'name': 'Kissing Face With Smiling Eyes',
        'id': 'kissing_face_with_smiling_eyes',
        'image': '1f619.png',
        'chars': [
          '\uD83D\uDE19'
        ]
      }, {
        'name': 'Kissing Face With Closed Eyes',
        'id': 'kissing_face_with_closed_eyes',
        'image': '1f61a.png',
        'chars': [
          '\uD83D\uDE1A',
          '\uE417'
        ]
      }, {
        'name': 'Face With Stuck-Out Tongue',
        'id': 'face_with_stuck-out_tongue',
        'image': '1f61b.png',
        'chars': [
          '\uD83D\uDE1B'
        ]
      }, {
        'name': 'Face With Stuck-Out Tongue And Winking Eye',
        'id': 'face_with_stuck-out_tongue_and_winking_eye',
        'image': '1f61c.png',
        'chars': [
          '\uD83D\uDE1C',
          '\uE105'
        ]
      }, {
        'name': 'Face With Stuck-Out Tongue And Tightly-Closed Eyes',
        'id': 'face_with_stuck-out_tongue_and_tightly-closed_eyes',
        'image': '1f61d.png',
        'chars': [
          '\uD83D\uDE1D',
          '\uE409'
        ]
      }, {
        'name': 'Disappointed Face',
        'id': 'disappointed_face',
        'image': '1f61e.png',
        'chars': [
          '\uD83D\uDE1E',
          '\uE058'
        ]
      }, {
        'name': 'Worried Face',
        'id': 'worried_face',
        'image': '1f61f.png',
        'chars': [
          '\uD83D\uDE1F'
        ]
      }, {
        'name': 'Angry Face',
        'id': 'angry_face',
        'image': '1f620.png',
        'chars': [
          '\uD83D\uDE20',
          '\uE059'
        ]
      }, {
        'name': 'Pouting Face',
        'id': 'pouting_face',
        'image': '1f621.png',
        'chars': [
          '\uD83D\uDE21',
          '\uE416'
        ]
      }, {
        'name': 'Crying Face',
        'id': 'crying_face',
        'image': '1f622.png',
        'chars': [
          '\uD83D\uDE22',
          '\uE413'
        ]
      }, {
        'name': 'Persevering Face',
        'id': 'persevering_face',
        'image': '1f623.png',
        'chars': [
          '\uD83D\uDE23',
          '\uE406'
        ]
      }, {
        'name': 'Face With Look Of Triumph',
        'id': 'face_with_look_of_triumph',
        'image': '1f624.png',
        'chars': [
          '\uD83D\uDE24'
        ]
      }, {
        'name': 'Disappointed But Relieved Face',
        'id': 'disappointed_but_relieved_face',
        'image': '1f625.png',
        'chars': [
          '\uD83D\uDE25',
          '\uE401'
        ]
      }, {
        'name': 'Frowning Face With Open Mouth',
        'id': 'frowning_face_with_open_mouth',
        'image': '1f626.png',
        'chars': [
          '\uD83D\uDE26'
        ]
      }, {
        'name': 'Anguished Face',
        'id': 'anguished_face',
        'image': '1f627.png',
        'chars': [
          '\uD83D\uDE27'
        ]
      }, {
        'name': 'Fearful Face',
        'id': 'fearful_face',
        'image': '1f628.png',
        'chars': [
          '\uD83D\uDE28',
          '\uE40B'
        ]
      }, {
        'name': 'Weary Face',
        'id': 'weary_face',
        'image': '1f629.png',
        'chars': [
          '\uD83D\uDE29'
        ]
      }, {
        'name': 'Sleepy Face',
        'id': 'sleepy_face',
        'image': '1f62a.png',
        'chars': [
          '\uD83D\uDE2A',
          '\uE408'
        ]
      }, {
        'name': 'Tired Face',
        'id': 'tired_face',
        'image': '1f62b.png',
        'chars': [
          '\uD83D\uDE2B'
        ]
      }, {
        'name': 'Grimacing Face',
        'id': 'grimacing_face',
        'image': '1f62c.png',
        'chars': [
          '\uD83D\uDE2C'
        ]
      }, {
        'name': 'Loudly Crying Face',
        'id': 'loudly_crying_face',
        'image': '1f62d.png',
        'chars': [
          '\uD83D\uDE2D',
          '\uE411'
        ]
      }, {
        'name': 'Face With Open Mouth',
        'id': 'face_with_open_mouth',
        'image': '1f62e.png',
        'chars': [
          '\uD83D\uDE2E'
        ]
      }, {
        'name': 'Hushed Face',
        'id': 'hushed_face',
        'image': '1f62f.png',
        'chars': [
          '\uD83D\uDE2F'
        ]
      }, {
        'name': 'Face With Open Mouth And Cold Sweat',
        'id': 'face_with_open_mouth_and_cold_sweat',
        'image': '1f630.png',
        'chars': [
          '\uD83D\uDE30',
          '\uE40F'
        ]
      }, {
        'name': 'Face Screaming In Fear',
        'id': 'face_screaming_in_fear',
        'image': '1f631.png',
        'chars': [
          '\uD83D\uDE31',
          '\uE107'
        ]
      }, {
        'name': 'Astonished Face',
        'id': 'astonished_face',
        'image': '1f632.png',
        'chars': [
          '\uD83D\uDE32',
          '\uE410'
        ]
      }, {
        'name': 'Flushed Face',
        'id': 'flushed_face',
        'image': '1f633.png',
        'chars': [
          '\uD83D\uDE33',
          '\uE40D'
        ]
      }, {
        'name': 'Sleeping Face',
        'id': 'sleeping_face',
        'image': '1f634.png',
        'chars': [
          '\uD83D\uDE34'
        ]
      }, {
        'name': 'Dizzy Face',
        'id': 'dizzy_face',
        'image': '1f635.png',
        'chars': [
          '\uD83D\uDE35'
        ]
      }, {
        'name': 'Face Without Mouth',
        'id': 'face_without_mouth',
        'image': '1f636.png',
        'chars': [
          '\uD83D\uDE36'
        ]
      }, {
        'name': 'Face With Medical Mask',
        'id': 'face_with_medical_mask',
        'image': '1f637.png',
        'chars': [
          '\uD83D\uDE37',
          '\uE40C'
        ]
      }, {
        'name': 'Grinning Cat Face With Smiling Eyes',
        'id': 'grinning_cat_face_with_smiling_eyes',
        'image': '1f638.png',
        'chars': [
          '\uD83D\uDE38'
        ]
      }, {
        'name': 'Cat Face With Tears Of Joy',
        'id': 'cat_face_with_tears_of_joy',
        'image': '1f639.png',
        'chars': [
          '\uD83D\uDE39'
        ]
      }, {
        'name': 'Smiling Cat Face With Open Mouth',
        'id': 'smiling_cat_face_with_open_mouth',
        'image': '1f63a.png',
        'chars': [
          '\uD83D\uDE3A'
        ]
      }, {
        'name': 'Smiling Cat Face With Heart-Shaped Eyes',
        'id': 'smiling_cat_face_with_heart-shaped_eyes',
        'image': '1f63b.png',
        'chars': [
          '\uD83D\uDE3B'
        ]
      }, {
        'name': 'Cat Face With Wry Smile',
        'id': 'cat_face_with_wry_smile',
        'image': '1f63c.png',
        'chars': [
          '\uD83D\uDE3C'
        ]
      }, {
        'name': 'Kissing Cat Face With Closed Eyes',
        'id': 'kissing_cat_face_with_closed_eyes',
        'image': '1f63d.png',
        'chars': [
          '\uD83D\uDE3D'
        ]
      }, {
        'name': 'Pouting Cat Face',
        'id': 'pouting_cat_face',
        'image': '1f63e.png',
        'chars': [
          '\uD83D\uDE3E'
        ]
      }, {
        'name': 'Crying Cat Face',
        'id': 'crying_cat_face',
        'image': '1f63f.png',
        'chars': [
          '\uD83D\uDE3F'
        ]
      }, {
        'name': 'Weary Cat Face',
        'id': 'weary_cat_face',
        'image': '1f640.png',
        'chars': [
          '\uD83D\uDE40'
        ]
      }, {
        'name': 'Face With No Good Gesture',
        'id': 'face_with_no_good_gesture',
        'image': '1f645.png',
        'chars': [
          '\uD83D\uDE45',
          '\uE423'
        ]
      }, {
        'name': 'Face With Ok Gesture',
        'id': 'face_with_ok_gesture',
        'image': '1f646.png',
        'chars': [
          '\uD83D\uDE46',
          '\uE424'
        ]
      }, {
        'name': 'Person Bowing Deeply',
        'id': 'person_bowing_deeply',
        'image': '1f647.png',
        'chars': [
          '\uD83D\uDE47',
          '\uE426'
        ]
      }, {
        'name': 'See-No-Evil Monkey',
        'id': 'see-no-evil_monkey',
        'image': '1f648.png',
        'chars': [
          '\uD83D\uDE48'
        ]
      }, {
        'name': 'Hear-No-Evil Monkey',
        'id': 'hear-no-evil_monkey',
        'image': '1f649.png',
        'chars': [
          '\uD83D\uDE49'
        ]
      }, {
        'name': 'Speak-No-Evil Monkey',
        'id': 'speak-no-evil_monkey',
        'image': '1f64a.png',
        'chars': [
          '\uD83D\uDE4A'
        ]
      }, {
        'name': 'Happy Person Raising One Hand',
        'id': 'happy_person_raising_one_hand',
        'image': '1f64b.png',
        'chars': [
          '\uD83D\uDE4B'
        ]
      }, {
        'name': 'Person Raising Both Hands In Celebration',
        'id': 'person_raising_both_hands_in_celebration',
        'image': '1f64c.png',
        'chars': [
          '\uD83D\uDE4C',
          '\uE427'
        ]
      }, {
        'name': 'Person Frowning',
        'id': 'person_frowning',
        'image': '1f64d.png',
        'chars': [
          '\uD83D\uDE4D'
        ]
      }, {
        'name': 'Person With Pouting Face',
        'id': 'person_with_pouting_face',
        'image': '1f64e.png',
        'chars': [
          '\uD83D\uDE4e'
        ]
      }, {
        'name': 'Person With Folded Hands',
        'id': 'person_with_folded_hands',
        'image': '1f64f.png',
        'chars': [
          '\uD83D\uDE4f',
          '\uE41D'
        ]
      }, {
        'name': 'Rocket',
        'id': 'rocket',
        'image': '1f680.png',
        'chars': [
          '\uD83D\uDE80',
          '\uE10D'
        ]
      }, {
        'name': 'Helicopter',
        'id': 'helicopter',
        'image': '1f681.png',
        'chars': [
          '\uD83D\uDE81'
        ]
      }, {
        'name': 'Steam Locomotive',
        'id': 'steam_locomotive',
        'image': '1f682.png',
        'chars': [
          '\uD83D\uDE82'
        ]
      }, {
        'name': 'Railway Car',
        'id': 'railway_car',
        'image': '1f683.png',
        'chars': [
          '\uD83D\uDE83',
          '\uE01E'
        ]
      }, {
        'name': 'High-Speed Train',
        'id': 'high-speed_train',
        'image': '1f684.png',
        'chars': [
          '\uD83D\uDE84',
          '\uE435'
        ]
      }, {
        'name': 'High-Speed Train With Bullet Nose',
        'id': 'high-speed_train_with_bullet_nose',
        'image': '1f685.png',
        'chars': [
          '\uD83D\uDE85',
          '\uE01F'
        ]
      }, {
        'name': 'Train',
        'id': 'train',
        'image': '1f686.png',
        'chars': [
          '\uD83D\uDE86'
        ]
      }, {
        'name': 'Metro',
        'id': 'metro',
        'image': '1f687.png',
        'chars': [
          '\uD83D\uDE87',
          '\uE434'
        ]
      }, {
        'name': 'Light Rail',
        'id': 'light_rail',
        'image': '1f688.png',
        'chars': [
          '\uD83D\uDE88'
        ]
      }, {
        'name': 'Station',
        'id': 'station',
        'image': '1f689.png',
        'chars': [
          '\uD83D\uDE89',
          '\uE039'
        ]
      }, {
        'name': 'Tram',
        'id': 'tram',
        'image': '1f68a.png',
        'chars': [
          '\uD83D\uDE8A'
        ]
      }, {
        'name': 'Tram Car',
        'id': 'tram_car',
        'image': '1f68b.png',
        'chars': [
          '\uD83D\uDE8B'
        ]
      }, {
        'name': 'Bus',
        'id': 'bus',
        'image': '1f68c.png',
        'chars': [
          '\uD83D\uDE8C',
          '\uE159'
        ]
      }, {
        'name': 'Oncoming Bus',
        'id': 'oncoming_bus',
        'image': '1f68d.png',
        'chars': [
          '\uD83D\uDE8D'
        ]
      }, {
        'name': 'Trolleybus',
        'id': 'trolleybus',
        'image': '1f68e.png',
        'chars': [
          '\uD83D\uDE8E'
        ]
      }, {
        'name': 'Bus Stop',
        'id': 'bus_stop',
        'image': '1f68f.png',
        'chars': [
          '\uD83D\uDE8F',
          '\uE150'
        ]
      }, {
        'name': 'Minibus',
        'id': 'minibus',
        'image': '1f690.png',
        'chars': [
          '\uD83D\uDE90'
        ]
      }, {
        'name': 'Ambulance',
        'id': 'ambulance',
        'image': '1f691.png',
        'chars': [
          '\uD83D\uDE91',
          '\uE431'
        ]
      }, {
        'name': 'Fire Engine',
        'id': 'fire_engine',
        'image': '1f692.png',
        'chars': [
          '\uD83D\uDE92',
          '\uE430'
        ]
      }, {
        'name': 'Police Car',
        'id': 'police_car',
        'image': '1f693.png',
        'chars': [
          '\uD83D\uDE93',
          '\uE432'
        ]
      }, {
        'name': 'Oncoming Police Car',
        'id': 'oncoming_police_car',
        'image': '1f694.png',
        'chars': [
          '\uD83D\uDE94'
        ]
      }, {
        'name': 'Taxi',
        'id': 'taxi',
        'image': '1f695.png',
        'chars': [
          '\uD83D\uDE95',
          '\uE15A'
        ]
      }, {
        'name': 'Oncoming Taxi',
        'id': 'oncoming_taxi',
        'image': '1f696.png',
        'chars': [
          '\uD83D\uDE96'
        ]
      }, {
        'name': 'Automobile',
        'id': 'automobile',
        'image': '1f697.png',
        'chars': [
          '\uD83D\uDE97',
          '\uE01B'
        ]
      }, {
        'name': 'Oncoming Automobile',
        'id': 'oncoming_automobile',
        'image': '1f698.png',
        'chars': [
          '\uD83D\uDE98'
        ]
      }, {
        'name': 'Recreational Vehicle',
        'id': 'recreational_vehicle',
        'image': '1f699.png',
        'chars': [
          '\uD83D\uDE99',
          '\uE42E'
        ]
      }, {
        'name': 'Delivery Truck',
        'id': 'delivery_truck',
        'image': '1f69a.png',
        'chars': [
          '\uD83D\uDE9A',
          '\uE42F'
        ]
      }, {
        'name': 'Articulated Lorry',
        'id': 'articulated_lorry',
        'image': '1f69b.png',
        'chars': [
          '\uD83D\uDE9B'
        ]
      }, {
        'name': 'Tractor',
        'id': 'tractor',
        'image': '1f69c.png',
        'chars': [
          '\uD83D\uDE9C'
        ]
      }, {
        'name': 'Monorail',
        'id': 'monorail',
        'image': '1f69d.png',
        'chars': [
          '\uD83D\uDE9D'
        ]
      }, {
        'name': 'Mountain Railway',
        'id': 'mountain_railway',
        'image': '1f69e.png',
        'chars': [
          '\uD83D\uDE9E'
        ]
      }, {
        'name': 'Suspension Railway',
        'id': 'suspension_railway',
        'image': '1f69f.png',
        'chars': [
          '\uD83D\uDE9F'
        ]
      }, {
        'name': 'Mountain Cableway',
        'id': 'mountain_cableway',
        'image': '1f6a0.png',
        'chars': [
          '\uD83D\uDEA0'
        ]
      }, {
        'name': 'Aerial Tramway',
        'id': 'aerial_tramway',
        'image': '1f6a1.png',
        'chars': [
          '\uD83D\uDEA1'
        ]
      }, {
        'name': 'Ship',
        'id': 'ship',
        'image': '1f6a2.png',
        'chars': [
          '\uD83D\uDEA2',
          '\uE202'
        ]
      }, {
        'name': 'Rowboat',
        'id': 'rowboat',
        'image': '1f6a3.png',
        'chars': [
          '\uD83D\uDEA3'
        ]
      }, {
        'name': 'Speedboat',
        'id': 'speedboat',
        'image': '1f6a4.png',
        'chars': [
          '\uD83D\uDEA4',
          '\uE135'
        ]
      }, {
        'name': 'Horizontal Traffic Light',
        'id': 'horizontal_traffic_light',
        'image': '1f6a5.png',
        'chars': [
          '\uD83D\uDEA5',
          '\uE14E'
        ]
      }, {
        'name': 'Vertical Traffic Light',
        'id': 'vertical_traffic_light',
        'image': '1f6a6.png',
        'chars': [
          '\uD83D\uDEA6'
        ]
      }, {
        'name': 'Construction Sign',
        'id': 'construction_sign',
        'image': '1f6a7.png',
        'chars': [
          '\uD83D\uDEA7',
          '\uE137'
        ]
      }, {
        'name': 'Police Cars Revolving Light',
        'id': 'police_cars_revolving_light',
        'image': '1f6a8.png',
        'chars': [
          '\uD83D\uDEA8'
        ]
      }, {
        'name': 'Triangular Flag On Post',
        'id': 'triangular_flag_on_post',
        'image': '1f6a9.png',
        'chars': [
          '\uD83D\uDEA9'
        ]
      }, {
        'name': 'Door',
        'id': 'door',
        'image': '1f6aa.png',
        'chars': [
          '\uD83D\uDEAA'
        ]
      }, {
        'name': 'No Entry Sign',
        'id': 'no_entry_sign',
        'image': '1f6ab.png',
        'chars': [
          '\uD83D\uDEAB'
        ]
      }, {
        'name': 'Smoking Symbol',
        'id': 'smoking_symbol',
        'image': '1f6ac.png',
        'chars': [
          '\uD83D\uDEAC',
          '\uE30E'
        ]
      }, {
        'name': 'No Smoking Symbol',
        'id': 'no_smoking_symbol',
        'image': '1f6ad.png',
        'chars': [
          '\uD83D\uDEAD',
          '\uE208'
        ]
      }, {
        'name': 'Put Litter In Its Place Symbol',
        'id': 'put_litter_in_its_place_symbol',
        'image': '1f6ae.png',
        'chars': [
          '\uD83D\uDEAE'
        ]
      }, {
        'name': 'Do Not Litter Symbol',
        'id': 'do_not_litter_symbol',
        'image': '1f6af.png',
        'chars': [
          '\uD83D\uDEAF'
        ]
      }, {
        'name': 'Potable Water Symbol',
        'id': 'potable_water_symbol',
        'image': '1f6b0.png',
        'chars': [
          '\uD83D\uDEB0'
        ]
      }, {
        'name': 'Non-Potable Water Symbol',
        'id': 'non-potable_water_symbol',
        'image': '1f6b1.png',
        'chars': [
          '\uD83D\uDEB1'
        ]
      }, {
        'name': 'Bicycle',
        'id': 'bicycle',
        'image': '1f6b2.png',
        'chars': [
          '\uD83D\uDEB2',
          '\uE136'
        ]
      }, {
        'name': 'No Bicycles',
        'id': 'no_bicycles',
        'image': '1f6b3.png',
        'chars': [
          '\uD83D\uDEB3'
        ]
      }, {
        'name': 'Bicyclist',
        'id': 'bicyclist',
        'image': '1f6b4.png',
        'chars': [
          '\uD83D\uDEB4'
        ]
      }, {
        'name': 'Mountain Bicyclist',
        'id': 'mountain_bicyclist',
        'image': '1f6b5.png',
        'chars': [
          '\uD83D\uDEB5'
        ]
      }, {
        'name': 'Pedestrian',
        'id': 'pedestrian',
        'image': '1f6b6.png',
        'chars': [
          '\uD83D\uDEB6',
          '\uE201'
        ]
      }, {
        'name': 'No Pedestrians',
        'id': 'no_pedestrians',
        'image': '1f6b7.png',
        'chars': [
          '\uD83D\uDEB7'
        ]
      }, {
        'name': 'Children Crossing',
        'id': 'children_crossing',
        'image': '1f6b8.png',
        'chars': [
          '\uD83D\uDEB8'
        ]
      }, {
        'name': 'Mens Symbol',
        'id': 'mens_symbol',
        'image': '1f6b9.png',
        'chars': [
          '\uD83D\uDEB9',
          '\uE138'
        ]
      }, {
        'name': 'Womens Symbol',
        'id': 'womens_symbol',
        'image': '1f6ba.png',
        'chars': [
          '\uD83D\uDEBA',
          '\uE139'
        ]
      }, {
        'name': 'Restroom',
        'id': 'restroom',
        'image': '1f6bb.png',
        'chars': [
          '\uD83D\uDEBB',
          '\uE151'
        ]
      }, {
        'name': 'Baby Symbol',
        'id': 'baby_symbol',
        'image': '1f6bc.png',
        'chars': [
          '\uD83D\uDEBC',
          '\uE13A'
        ]
      }, {
        'name': 'Toilet',
        'id': 'toilet',
        'image': '1f6bd.png',
        'chars': [
          '\uD83D\uDEBD',
          '\uE140'
        ]
      }, {
        'name': 'Water Closet',
        'id': 'water_closet',
        'image': '1f6be.png',
        'chars': [
          '\uD83D\uDEBE',
          '\uE309'
        ]
      }, {
        'name': 'Shower',
        'id': 'shower',
        'image': '1f6bf.png',
        'chars': [
          '\uD83D\uDEBf'
        ]
      }, {
        'name': 'Bath',
        'id': 'bath',
        'image': '1f6c0.png',
        'chars': [
          '\uD83D\uDEC0',
          '\uE13F'
        ]
      }, {
        'name': 'Bathtub',
        'id': 'bathtub',
        'image': '1f6c1.png',
        'chars': [
          '\uD83D\uDEC1'
        ]
      }, {
        'name': 'Passport Control',
        'id': 'passport_control',
        'image': '1f6c2.png',
        'chars': [
          '\uD83D\uDEC2'
        ]
      }, {
        'name': 'Customs',
        'id': 'customs',
        'image': '1f6c3.png',
        'chars': [
          '\uD83D\uDEC3'
        ]
      }, {
        'name': 'Baggage Claim',
        'id': 'baggage_claim',
        'image': '1f6c4.png',
        'chars': [
          '\uD83D\uDEC4'
        ]
      }, {
        'name': 'Left Luggage',
        'id': 'left_luggage',
        'image': '1f6c5.png',
        'chars': [
          '\uD83D\uDEC5'
        ]
      }, {
        'name': 'Hash Key',
        'id': 'hash_key',
        'image': '23-20e3.png',
        'chars': [
          '\u0023\u20E3',
          '\uE210'
        ]
      }, {
        'name': 'Keycap 0',
        'id': 'keycap_0',
        'image': '30-20e3.png',
        'chars': [
          '\u0030\u20E3',
          '\uE225'
        ]
      }, {
        'name': 'Keycap 1',
        'id': 'keycap_1',
        'image': '31-20e3.png',
        'chars': [
          '\u0031\u20E3',
          '\uE21C'
        ]
      }, {
        'name': 'Keycap 2',
        'id': 'keycap_2',
        'image': '32-20e3.png',
        'chars': [
          '\u0032\u20E3',
          '\uE21D'
        ]
      }, {
        'name': 'Keycap 3',
        'id': 'keycap_3',
        'image': '33-20e3.png',
        'chars': [
          '\u0033\u20E3',
          '\uE21E'
        ]
      }, {
        'name': 'Keycap 4',
        'id': 'keycap_4',
        'image': '34-20e3.png',
        'chars': [
          '\u0034\u20E3',
          '\uE21F'
        ]
      }, {
        'name': 'Keycap 5',
        'id': 'keycap_5',
        'image': '35-20e3.png',
        'chars': [
          '\u0035\u20E3',
          '\uE220'
        ]
      }, {
        'name': 'Keycap 6',
        'id': 'keycap_6',
        'image': '36-20e3.png',
        'chars': [
          '\u0036\u20E3',
          '\uE221'
        ]
      }, {
        'name': 'Keycap 7',
        'id': 'keycap_7',
        'image': '37-20e3.png',
        'chars': [
          '\u0037\u20E3',
          '\uE222'
        ]
      }, {
        'name': 'Keycap 8',
        'id': 'keycap_8',
        'image': '38-20e3.png',
        'chars': [
          '\u0038\u20E3',
          '\uE223'
        ]
      }, {
        'name': 'Keycap 9',
        'id': 'keycap_9',
        'image': '39-20e3.png',
        'chars': [
          '\u0039\u20E3',
          '\uE224'
        ]
      }, {
        'name': 'Flag Of China',
        'id': 'flag_of_china',
        'image': '1f1e8-1f1f3.png',
        'chars': [
          '\uD83C\uDDE8\uD83C\uDDF3',
          '\uE513'
        ]
      }, {
        'name': 'Flag Of Germany',
        'id': 'flag_of_germany',
        'image': '1f1e9-1f1ea.png',
        'chars': [
          '\uD83C\uDDE9\uD83C\uDDEA',
          '\uE50E'
        ]
      }, {
        'name': 'Flag Of Spain',
        'id': 'flag_of_spain',
        'image': '1f1ea-1f1f8.png',
        'chars': [
          '\uD83C\uDDEA\uD83C\uDDF8',
          '\uE511'
        ]
      }, {
        'name': 'Flag Of France',
        'id': 'flag_of_france',
        'image': '1f1eb-1f1f7.png',
        'chars': [
          '\uD83C\uDDEB\uD83C\uDDF7',
          '\uE50D'
        ]
      }, {
        'name': 'Flag Of Italy',
        'id': 'flag_of_italy',
        'image': '1f1ee-1f1f9.png',
        'chars': [
          '\uD83C\uDDEE\uD83C\uDDF9',
          '\uE50F'
        ]
      }, {
        'name': 'Flag Of Japan',
        'id': 'flag_of_japan',
        'image': '1f1ef-1f1f5.png',
        'chars': [
          '\uD83C\uDDEF\uD83C\uDDF5',
          '\uE50B'
        ]
      }, {
        'name': 'Flag Of South Korea',
        'id': 'flag_of_south_korea',
        'image': '1f1f0-1f1f7.png',
        'chars': [
          '\uD83C\uDDF0\uD83C\uDDF7',
          '\uE514'
        ]
      }, {
        'name': 'Flag Of Russia',
        'id': 'flag_of_russia',
        'image': '1f1f7-1f1fa.png',
        'chars': [
          '\uD83C\uDDF7\uD83C\uDDFA',
          '\uE512'
        ]
      }, {
        'name': 'Flag Of The United States',
        'id': 'flag_of_the_united_states',
        'image': '1f1fa-1f1f8.png',
        'chars': [
          '\uD83C\uDDFA\uD83C\uDDF8',
          '\uE50C'
        ]
      }, {
        'name': 'Flag Of The United Kingdom',
        'id': 'flag_of_the_united_kingdom',
        'image': '1f1ec-1f1e7.png',
        'chars': [
          '\uD83C\uDDEC\uD83C\uDDE7',
          '\uE510'
        ]
      }
    ],
    'blocks': [{
      'name': 'Basic Latin',
      'start': '\u0000',
      'end': '\u007F'
    }, {
      'name': 'Latin-1 Supplement',
      'start': '\u0080',
      'end': '\u00FF'
    }, {
      'name': 'Latin Extended-A',
      'start': '\u0100',
      'end': '\u017F'
    }, {
      'name': 'Latin Extended-B',
      'start': '\u0180',
      'end': '\u024F'
    }, {
      'name': 'Ipa Extensions',
      'start': '\u0250',
      'end': '\u02AF'
    }, {
      'name': 'Spacing Modifier Letters',
      'start': '\u02B0',
      'end': '\u02FF'
    }, {
      'name': 'Combining Diacritical Marks',
      'start': '\u0300',
      'end': '\u036F'
    }, {
      'name': 'Greek And Coptic',
      'start': '\u0370',
      'end': '\u03FF'
    }, {
      'name': 'Cyrillic',
      'start': '\u0400',
      'end': '\u04FF'
    }, {
      'name': 'Cyrillic Supplement',
      'start': '\u0500',
      'end': '\u052F'
    }, {
      'name': 'Armenian',
      'start': '\u0530',
      'end': '\u058F'
    }, {
      'name': 'Hebrew',
      'start': '\u0590',
      'end': '\u05FF'
    }, {
      'name': 'Arabic',
      'start': '\u0600',
      'end': '\u06FF'
    }, {
      'name': 'Syriac',
      'start': '\u0700',
      'end': '\u074F'
    }, {
      'name': 'Arabic Supplement',
      'start': '\u0750',
      'end': '\u077F'
    }, {
      'name': 'Thaana',
      'start': '\u0780',
      'end': '\u07BF'
    }, {
      'name': 'Nko',
      'start': '\u07C0',
      'end': '\u07FF'
    }, {
      'name': 'Samaritan',
      'start': '\u0800',
      'end': '\u083F'
    }, {
      'name': 'Mandaic',
      'start': '\u0840',
      'end': '\u085F'
    }, {
      'name': 'Arabic Extended-A',
      'start': '\u08A0',
      'end': '\u08FF'
    }, {
      'name': 'Devanagari',
      'start': '\u0900',
      'end': '\u097F'
    }, {
      'name': 'Bengali',
      'start': '\u0980',
      'end': '\u09FF'
    }, {
      'name': 'Gurmukhi',
      'start': '\u0A00',
      'end': '\u0A7F'
    }, {
      'name': 'Gujarati',
      'start': '\u0A80',
      'end': '\u0AFF'
    }, {
      'name': 'Oriya',
      'start': '\u0B00',
      'end': '\u0B7F'
    }, {
      'name': 'Tamil',
      'start': '\u0B80',
      'end': '\u0BFF'
    }, {
      'name': 'Telugu',
      'start': '\u0C00',
      'end': '\u0C7F'
    }, {
      'name': 'Kannada',
      'start': '\u0C80',
      'end': '\u0CFF'
    }, {
      'name': 'Malayalam',
      'start': '\u0D00',
      'end': '\u0D7F'
    }, {
      'name': 'Sinhala',
      'start': '\u0D80',
      'end': '\u0DFF'
    }, {
      'name': 'Thai',
      'start': '\u0E00',
      'end': '\u0E7F'
    }, {
      'name': 'Lao',
      'start': '\u0E80',
      'end': '\u0EFF'
    }, {
      'name': 'Tibetan',
      'start': '\u0F00',
      'end': '\u0FFF'
    }, {
      'name': 'Myanmar',
      'start': '\u1000',
      'end': '\u109F'
    }, {
      'name': 'Georgian',
      'start': '\u10A0',
      'end': '\u10FF'
    }, {
      'name': 'Hangul Jamo',
      'start': '\u1100',
      'end': '\u11FF'
    }, {
      'name': 'Ethiopic',
      'start': '\u1200',
      'end': '\u137F'
    }, {
      'name': 'Ethiopic Supplement',
      'start': '\u1380',
      'end': '\u139F'
    }, {
      'name': 'Cherokee',
      'start': '\u13A0',
      'end': '\u13FF'
    }, {
      'name': 'Unified Canadian Aboriginal Syllabics',
      'start': '\u1400',
      'end': '\u167F'
    }, {
      'name': 'Ogham',
      'start': '\u1680',
      'end': '\u169F'
    }, {
      'name': 'Runic',
      'start': '\u16A0',
      'end': '\u16FF'
    }, {
      'name': 'Tagalog',
      'start': '\u1700',
      'end': '\u171F'
    }, {
      'name': 'Hanunoo',
      'start': '\u1720',
      'end': '\u173F'
    }, {
      'name': 'Buhid',
      'start': '\u1740',
      'end': '\u175F'
    }, {
      'name': 'Tagbanwa',
      'start': '\u1760',
      'end': '\u177F'
    }, {
      'name': 'Khmer',
      'start': '\u1780',
      'end': '\u17FF'
    }, {
      'name': 'Mongolian',
      'start': '\u1800',
      'end': '\u18AF'
    }, {
      'name': 'Unified Canadian Aboriginal Syllabics Extended',
      'start': '\u18B0',
      'end': '\u18FF'
    }, {
      'name': 'Limbu',
      'start': '\u1900',
      'end': '\u194F'
    }, {
      'name': 'Tai Le',
      'start': '\u1950',
      'end': '\u197F'
    }, {
      'name': 'New Tai Lue',
      'start': '\u1980',
      'end': '\u19DF'
    }, {
      'name': 'Khmer Symbols',
      'start': '\u19E0',
      'end': '\u19FF'
    }, {
      'name': 'Buginese',
      'start': '\u1A00',
      'end': '\u1A1F'
    }, {
      'name': 'Tai Tham',
      'start': '\u1A20',
      'end': '\u1AAF'
    }, {
      'name': 'Balinese',
      'start': '\u1B00',
      'end': '\u1B7F'
    }, {
      'name': 'Sundanese',
      'start': '\u1B80',
      'end': '\u1BBF'
    }, {
      'name': 'Batak',
      'start': '\u1BC0',
      'end': '\u1BFF'
    }, {
      'name': 'Lepcha',
      'start': '\u1C00',
      'end': '\u1C4F'
    }, {
      'name': 'Ol Chiki',
      'start': '\u1C50',
      'end': '\u1C7F'
    }, {
      'name': 'Sundanese Supplement',
      'start': '\u1CC0',
      'end': '\u1CCF'
    }, {
      'name': 'Vedic Extensions',
      'start': '\u1CD0',
      'end': '\u1CFF'
    }, {
      'name': 'Phonetic Extensions',
      'start': '\u1D00',
      'end': '\u1D7F'
    }, {
      'name': 'Phonetic Extensions Supplement',
      'start': '\u1D80',
      'end': '\u1DBF'
    }, {
      'name': 'Combining Diacritical Marks Supplement',
      'start': '\u1DC0',
      'end': '\u1DFF'
    }, {
      'name': 'Latin Extended Additional',
      'start': '\u1E00',
      'end': '\u1EFF'
    }, {
      'name': 'Greek Extended',
      'start': '\u1F00',
      'end': '\u1FFF'
    }, {
      'name': 'General Punctuation',
      'start': '\u2000',
      'end': '\u206F'
    }, {
      'name': 'Superscripts And Subscripts',
      'start': '\u2070',
      'end': '\u209F'
    }, {
      'name': 'Currency Symbols',
      'start': '\u20A0',
      'end': '\u20CF'
    }, {
      'name': 'Combining Diacritical Marks For Symbols',
      'start': '\u20D0',
      'end': '\u20FF'
    }, {
      'name': 'Letterlike Symbols',
      'start': '\u2100',
      'end': '\u214F'
    }, {
      'name': 'Number Forms',
      'start': '\u2150',
      'end': '\u218F'
    }, {
      'name': 'Arrows',
      'start': '\u2190',
      'end': '\u21FF'
    }, {
      'name': 'Mathematical Operators',
      'start': '\u2200',
      'end': '\u22FF'
    }, {
      'name': 'Miscellaneous Technical',
      'start': '\u2300',
      'end': '\u23FF'
    }, {
      'name': 'Control Pictures',
      'start': '\u2400',
      'end': '\u243F'
    }, {
      'name': 'Optical Character Recognition',
      'start': '\u2440',
      'end': '\u245F'
    }, {
      'name': 'Enclosed Alphanumerics',
      'start': '\u2460',
      'end': '\u24FF'
    }, {
      'name': 'Box Drawing',
      'start': '\u2500',
      'end': '\u257F'
    }, {
      'name': 'Block Elements',
      'start': '\u2580',
      'end': '\u259F'
    }, {
      'name': 'Geometric Shapes',
      'start': '\u25A0',
      'end': '\u25FF'
    }, {
      'name': 'Miscellaneous Symbols',
      'start': '\u2600',
      'end': '\u26FF'
    }, {
      'name': 'Dingbats',
      'start': '\u2700',
      'end': '\u27BF'
    }, {
      'name': 'Miscellaneous Mathematical Symbols-A',
      'start': '\u27C0',
      'end': '\u27EF'
    }, {
      'name': 'Supplemental Arrows-A',
      'start': '\u27F0',
      'end': '\u27FF'
    }, {
      'name': 'Braille Patterns',
      'start': '\u2800',
      'end': '\u28FF'
    }, {
      'name': 'Supplemental Arrows-B',
      'start': '\u2900',
      'end': '\u297F'
    }, {
      'name': 'Miscellaneous Mathematical Symbols-B',
      'start': '\u2980',
      'end': '\u29FF'
    }, {
      'name': 'Supplemental Mathematical Operators',
      'start': '\u2A00',
      'end': '\u2AFF'
    }, {
      'name': 'Miscellaneous Symbols And Arrows',
      'start': '\u2B00',
      'end': '\u2BFF'
    }, {
      'name': 'Glagolitic',
      'start': '\u2C00',
      'end': '\u2C5F'
    }, {
      'name': 'Latin Extended-C',
      'start': '\u2C60',
      'end': '\u2C7F'
    }, {
      'name': 'Coptic',
      'start': '\u2C80',
      'end': '\u2CFF'
    }, {
      'name': 'Georgian Supplement',
      'start': '\u2D00',
      'end': '\u2D2F'
    }, {
      'name': 'Tifinagh',
      'start': '\u2D30',
      'end': '\u2D7F'
    }, {
      'name': 'Ethiopic Extended',
      'start': '\u2D80',
      'end': '\u2DDF'
    }, {
      'name': 'Cyrillic Extended-A',
      'start': '\u2DE0',
      'end': '\u2DFF'
    }, {
      'name': 'Supplemental Punctuation',
      'start': '\u2E00',
      'end': '\u2E7F'
    }, {
      'name': 'Cjk Radicals Supplement',
      'start': '\u2E80',
      'end': '\u2EFF'
    }, {
      'name': 'Kangxi Radicals',
      'start': '\u2F00',
      'end': '\u2FDF'
    }, {
      'name': 'Ideographic Description Characters',
      'start': '\u2FF0',
      'end': '\u2FFF'
    }, {
      'name': 'Cjk Symbols And Punctuation',
      'start': '\u3000',
      'end': '\u303F'
    }, {
      'name': 'Hiragana',
      'start': '\u3040',
      'end': '\u309F'
    }, {
      'name': 'Katakana',
      'start': '\u30A0',
      'end': '\u30FF'
    }, {
      'name': 'Bopomofo',
      'start': '\u3100',
      'end': '\u312F'
    }, {
      'name': 'Hangul Compatibility Jamo',
      'start': '\u3130',
      'end': '\u318F'
    }, {
      'name': 'Kanbun',
      'start': '\u3190',
      'end': '\u319F'
    }, {
      'name': 'Bopomofo Extended',
      'start': '\u31A0',
      'end': '\u31BF'
    }, {
      'name': 'Cjk Strokes',
      'start': '\u31C0',
      'end': '\u31EF'
    }, {
      'name': 'Katakana Phonetic Extensions',
      'start': '\u31F0',
      'end': '\u31FF'
    }, {
      'name': 'Enclosed Cjk Letters And Months',
      'start': '\u3200',
      'end': '\u32FF'
    }, {
      'name': 'Cjk Compatibility',
      'start': '\u3300',
      'end': '\u33FF'
    }, {
      'name': 'Cjk Unified Ideographs Extension A',
      'start': '\u3400',
      'end': '\u4DBF'
    }, {
      'name': 'Yijing Hexagram Symbols',
      'start': '\u4DC0',
      'end': '\u4DFF'
    }, {
      'name': 'Cjk Unified Ideographs',
      'start': '\u4E00',
      'end': '\u9FFF'
    }, {
      'name': 'Yi Syllables',
      'start': '\uA000',
      'end': '\uA48F'
    }, {
      'name': 'Yi Radicals',
      'start': '\uA490',
      'end': '\uA4CF'
    }, {
      'name': 'Lisu',
      'start': '\uA4D0',
      'end': '\uA4FF'
    }, {
      'name': 'Vai',
      'start': '\uA500',
      'end': '\uA63F'
    }, {
      'name': 'Cyrillic Extended-B',
      'start': '\uA640',
      'end': '\uA69F'
    }, {
      'name': 'Bamum',
      'start': '\uA6A0',
      'end': '\uA6FF'
    }, {
      'name': 'Modifier Tone Letters',
      'start': '\uA700',
      'end': '\uA71F'
    }, {
      'name': 'Latin Extended-D',
      'start': '\uA720',
      'end': '\uA7FF'
    }, {
      'name': 'Syloti Nagri',
      'start': '\uA800',
      'end': '\uA82F'
    }, {
      'name': 'Common Indic Number Forms',
      'start': '\uA830',
      'end': '\uA83F'
    }, {
      'name': 'Phags-Pa',
      'start': '\uA840',
      'end': '\uA87F'
    }, {
      'name': 'Saurashtra',
      'start': '\uA880',
      'end': '\uA8DF'
    }, {
      'name': 'Devanagari Extended',
      'start': '\uA8E0',
      'end': '\uA8FF'
    }, {
      'name': 'Kayah Li',
      'start': '\uA900',
      'end': '\uA92F'
    }, {
      'name': 'Rejang',
      'start': '\uA930',
      'end': '\uA95F'
    }, {
      'name': 'Hangul Jamo Extended-A',
      'start': '\uA960',
      'end': '\uA97F'
    }, {
      'name': 'Javanese',
      'start': '\uA980',
      'end': '\uA9DF'
    }, {
      'name': 'Cham',
      'start': '\uAA00',
      'end': '\uAA5F'
    }, {
      'name': 'Myanmar Extended-A',
      'start': '\uAA60',
      'end': '\uAA7F'
    }, {
      'name': 'Tai Viet',
      'start': '\uAA80',
      'end': '\uAADF'
    }, {
      'name': 'Meetei Mayek Extensions',
      'start': '\uAAE0',
      'end': '\uAAFF'
    }, {
      'name': 'Ethiopic Extended-A',
      'start': '\uAB00',
      'end': '\uAB2F'
    }, {
      'name': 'Meetei Mayek',
      'start': '\uABC0',
      'end': '\uABFF'
    }, {
      'name': 'Hangul Syllables',
      'start': '\uAC00',
      'end': '\uD7AF'
    }, {
      'name': 'Hangul Jamo Extended-B',
      'start': '\uD7B0',
      'end': '\uD7FF'
    }, {
      'name': 'High Surrogates',
      'start': '\uD800',
      'end': '\uDB7F'
    }, {
      'name': 'High Private Use Surrogates',
      'start': '\uDB80',
      'end': '\uDBFF'
    }, {
      'name': 'Low Surrogates',
      'start': '\uDC00',
      'end': '\uDFFF'
    }, {
      'name': 'Private Use Area',
      'start': '\uE000',
      'end': '\uF8FF'
    }, {
      'name': 'Cjk Compatibility Ideographs',
      'start': '\uF900',
      'end': '\uFAFF'
    }, {
      'name': 'Alphabetic Presentation Forms',
      'start': '\uFB00',
      'end': '\uFB4F'
    }, {
      'name': 'Arabic Presentation Forms-A',
      'start': '\uFB50',
      'end': '\uFDFF'
    }, {
      'name': 'Variation Selectors',
      'start': '\uFE00',
      'end': '\uFE0F'
    }, {
      'name': 'Vertical Forms',
      'start': '\uFE10',
      'end': '\uFE1F'
    }, {
      'name': 'Combining Half Marks',
      'start': '\uFE20',
      'end': '\uFE2F'
    }, {
      'name': 'Cjk Compatibility Forms',
      'start': '\uFE30',
      'end': '\uFE4F'
    }, {
      'name': 'Small Form Variants',
      'start': '\uFE50',
      'end': '\uFE6F'
    }, {
      'name': 'Arabic Presentation Forms-B',
      'start': '\uFE70',
      'end': '\uFEFF'
    }, {
      'name': 'Halfwidth And Fullwidth Forms',
      'start': '\uFF00',
      'end': '\uFFEF'
    }, {
      'name': 'Specials',
      'start': '\uFFF0',
      'end': '\uFFFF'
    }, {
      'name': 'Linear B Syllabary',
      'start': '\uD800\uDC00',
      'end': '\uD800\uDC7F'
    }, {
      'name': 'Linear B Ideograms',
      'start': '\uD800\uDC80',
      'end': '\uD800\uDCFF'
    }, {
      'name': 'Aegean Numbers',
      'start': '\uD800\uDD00',
      'end': '\uD800\uDD3F'
    }, {
      'name': 'Ancient Greek Numbers',
      'start': '\uD800\uDD40',
      'end': '\uD800\uDD8F'
    }, {
      'name': 'Ancient Symbols',
      'start': '\uD800\uDD90',
      'end': '\uD800\uDDCF'
    }, {
      'name': 'Phaistos Disc',
      'start': '\uD800\uDDD0',
      'end': '\uD800\uDDFF'
    }, {
      'name': 'Lycian',
      'start': '\uD800\uDE80',
      'end': '\uD800\uDE9F'
    }, {
      'name': 'Carian',
      'start': '\uD800\uDEA0',
      'end': '\uD800\uDEDF'
    }, {
      'name': 'Old Italic',
      'start': '\uD800\uDF00',
      'end': '\uD800\uDF2F'
    }, {
      'name': 'Gothic',
      'start': '\uD800\uDF30',
      'end': '\uD800\uDF4F'
    }, {
      'name': 'Ugaritic',
      'start': '\uD800\uDF80',
      'end': '\uD800\uDF9F'
    }, {
      'name': 'Old Persian',
      'start': '\uD800\uDFA0',
      'end': '\uD800\uDFDF'
    }, {
      'name': 'Deseret',
      'start': '\uD801\uDC00',
      'end': '\uD801\uDC4F'
    }, {
      'name': 'Shavian',
      'start': '\uD801\uDC50',
      'end': '\uD801\uDC7F'
    }, {
      'name': 'Osmanya',
      'start': '\uD801\uDC80',
      'end': '\uD801\uDCAF'
    }, {
      'name': 'Cypriot Syllabary',
      'start': '\uD802\uDC00',
      'end': '\uD802\uDC3F'
    }, {
      'name': 'Imperial Aramaic',
      'start': '\uD802\uDC40',
      'end': '\uD802\uDC5F'
    }, {
      'name': 'Phoenician',
      'start': '\uD802\uDD00',
      'end': '\uD802\uDD1F'
    }, {
      'name': 'Lydian',
      'start': '\uD802\uDD20',
      'end': '\uD802\uDD3F'
    }, {
      'name': 'Meroitic Hieroglyphs',
      'start': '\uD802\uDD80',
      'end': '\uD802\uDD9F'
    }, {
      'name': 'Meroitic Cursive',
      'start': '\uD802\uDDA0',
      'end': '\uD802\uDDFF'
    }, {
      'name': 'Kharoshthi',
      'start': '\uD802\uDE00',
      'end': '\uD802\uDE5F'
    }, {
      'name': 'Old South Arabian',
      'start': '\uD802\uDE60',
      'end': '\uD802\uDE7F'
    }, {
      'name': 'Avestan',
      'start': '\uD802\uDF00',
      'end': '\uD802\uDF3F'
    }, {
      'name': 'Inscriptional Parthian',
      'start': '\uD802\uDF40',
      'end': '\uD802\uDF5F'
    }, {
      'name': 'Inscriptional Pahlavi',
      'start': '\uD802\uDF60',
      'end': '\uD802\uDF7F'
    }, {
      'name': 'Old Turkic',
      'start': '\uD803\uDC00',
      'end': '\uD803\uDC4F'
    }, {
      'name': 'Rumi Numeral Symbols',
      'start': '\uD803\uDE60',
      'end': '\uD803\uDE7F'
    }, {
      'name': 'Brahmi',
      'start': '\uD804\uDC00',
      'end': '\uD804\uDC7F'
    }, {
      'name': 'Kaithi',
      'start': '\uD804\uDC80',
      'end': '\uD804\uDCCF'
    }, {
      'name': 'Sora Sompeng',
      'start': '\uD804\uDCD0',
      'end': '\uD804\uDCFF'
    }, {
      'name': 'Chakma',
      'start': '\uD804\uDD00',
      'end': '\uD804\uDD4F'
    }, {
      'name': 'Sharada',
      'start': '\uD804\uDD80',
      'end': '\uD804\uDDDF'
    }, {
      'name': 'Takri',
      'start': '\uD805\uDE80',
      'end': '\uD805\uDECF'
    }, {
      'name': 'Cuneiform',
      'start': '\uD808\uDC00',
      'end': '\uD808\uDFFF'
    }, {
      'name': 'Cuneiform Numbers And Punctuation',
      'start': '\uD809\uDC00',
      'end': '\uD809\uDC7F'
    }, {
      'name': 'Egyptian Hieroglyphs',
      'start': '\uD80C\uDC00',
      'end': '\uD80D\uDC2F'
    }, {
      'name': 'Bamum Supplement',
      'start': '\uD81A\uDC00',
      'end': '\uD81A\uDE3F'
    }, {
      'name': 'Miao',
      'start': '\uD81B\uDF00',
      'end': '\uD81B\uDF9F'
    }, {
      'name': 'Kana Supplement',
      'start': '\uD82C\uDC00',
      'end': '\uD82C\uDCFF'
    }, {
      'name': 'Byzantine Musical Symbols',
      'start': '\uD834\uDC00',
      'end': '\uD834\uDCFF'
    }, {
      'name': 'Musical Symbols',
      'start': '\uD834\uDD00',
      'end': '\uD834\uDDFF'
    }, {
      'name': 'Ancient Greek Musical Notation',
      'start': '\uD834\uDE00',
      'end': '\uD834\uDE4F'
    }, {
      'name': 'Tai Xuan Jing Symbols',
      'start': '\uD834\uDF00',
      'end': '\uD834\uDF5F'
    }, {
      'name': 'Counting Rod Numerals',
      'start': '\uD834\uDF60',
      'end': '\uD834\uDF7F'
    }, {
      'name': 'Mathematical Alphanumeric Symbols',
      'start': '\uD835\uDC00',
      'end': '\uD835\uDFFF'
    }, {
      'name': 'Arabic Mathematical Alphabetic Symbols',
      'start': '\uD83B\uDE00',
      'end': '\uD83B\uDEFF'
    }, {
      'name': 'Mahjong Tiles',
      'start': '\uD83C\uDC00',
      'end': '\uD83C\uDC2F'
    }, {
      'name': 'Domino Tiles',
      'start': '\uD83C\uDC30',
      'end': '\uD83C\uDC9F'
    }, {
      'name': 'Playing Cards',
      'start': '\uD83C\uDCA0',
      'end': '\uD83C\uDCFF'
    }, {
      'name': 'Enclosed Alphanumeric Supplement',
      'start': '\uD83C\uDD00',
      'end': '\uD83C\uDDFF'
    }, {
      'name': 'Enclosed Ideographic Supplement',
      'start': '\uD83C\uDE00',
      'end': '\uD83C\uDEFF'
    }, {
      'name': 'Miscellaneous Symbols And Pictographs',
      'start': '\uD83C\uDF00',
      'end': '\uD83D\uDDFF'
    }, {
      'name': 'Emoticons',
      'start': '\uD83D\uDE00',
      'end': '\uD83D\uDE4F'
    }, {
      'name': 'Transport And Map Symbols',
      'start': '\uD83D\uDE80',
      'end': '\uD83D\uDEFF'
    }, {
      'name': 'Alchemical Symbols',
      'start': '\uD83D\uDF00',
      'end': '\uD83D\uDF7F'
    }, {
      'name': 'Cjk Unified Ideographs Extension B',
      'start': '\uD840\uDC00',
      'end': '\uD869\uDEDF'
    }, {
      'name': 'Cjk Unified Ideographs Extension C',
      'start': '\uD869\uDF00',
      'end': '\uD86D\uDF3F'
    }, {
      'name': 'Cjk Unified Ideographs Extension D',
      'start': '\uD86D\uDF40',
      'end': '\uD86E\uDC1F'
    }, {
      'name': 'Cjk Compatibility Ideographs Supplement',
      'start': '\uD87E\uDC00',
      'end': '\uD87E\uDE1F'
    }, {
      'name': 'Tags',
      'start': '\uDB40\uDC00',
      'end': '\uDB40\uDC7F'
    }, {
      'name': 'Variation Selectors Supplement',
      'start': '\uDB40\uDD00',
      'end': '\uDB40\uDDEF'
    }, {
      'name': 'Supplementary Private Use Area-A',
      'start': '\uDB80\uDC00',
      'end': '\uDBBF\uDFFF'
    }, {
      'name': 'Supplementary Private Use Area-B',
      'start': '\uDBC0\uDC00',
      'end': '\uDBFF\uDFFF'
    }],
    'groups': [{
      'name': 'People',
      'items': []
    }, {
      'name': 'Nature',
      'items': []
    }, {
      'name': 'Objects',
      'items': []
    }, {
      'name': 'Places',
      'items': []
    }, {
      'name': 'Symbols',
      'items': []
    }],
    'ioshidden': [
      '\u00A9',
      '\u00AE',
      '\u203C',
      '\u2049',
      '\u2122',
      '\u2139',
      '\u2194',
      '\u2195',
      '\u2196',
      '\u2197',
      '\u2198',
      '\u2199',
      '\u21A9',
      '\u21AA',
      '\u231A',
      '\u231B',
      '\u24C2',
      '\u25AA',
      '\u25AB',
      '\u25B6',
      '\u25C0',
      '\u25FB',
      '\u25FC',
      '\u25FD',
      '\u25FE',
      '\u2600',
      '\u2601',
      '\u260E',
      '\u2611',
      '\u261D',
      '\u263A',
      '\u2648',
      '\u2649',
      '\u264A',
      '\u264B',
      '\u264C',
      '\u264D',
      '\u264E',
      '\u264F',
      '\u2650',
      '\u2651',
      '\u2652',
      '\u2653',
      '\u2660',
      '\u2663',
      '\u2665',
      '\u2666',
      '\u2668',
      '\u267B',
      '\u267F',
      '\u2693',
      '\u26A0',
      '\u26A1',
      '\u26AA',
      '\u26AB',
      '\u2702',
      '\u2708',
      '\u2709',
      '\u270C',
      '\u270F',
      '\u2712',
      '\u2714',
      '\u2716',
      '\u2733',
      '\u2734',
      '\u2744',
      '\u2747',
      '\u2764',
      '\u27A1',
      '\u3030',
      '\u303D',
      '\u3297',
      '\u3299'
    ],
    'machidden': [
      '\uF8FF'
    ],

    $get: function() {
      return chars;
    }
  };
  return chars;
});
angular.module('angular-emojiuni', [
  'angular-emojiuni.chars'

]).provider('Emojiuni', ["EmojiuniCharsProvider", function(EmojiuniCharsProvider) {
  var byChars = {};
  var allChars = [];
  var pattern = '';

  // init emoji data
  angular.forEach(EmojiuniCharsProvider.items, function(item) {
    angular.forEach(item.chars, function(c) {
      allChars.push(c);
      byChars[c] = item;
    });
  });
  pattern = new RegExp(allChars.join('|'), 'g');

  var emoji = {

    baseUrl: '/',

    compile: function(str) {
      str = str || '';
      angular.forEach(str.match(pattern), function(c) {
        str = str.replace(new RegExp(c, 'g'), emoji.getImage(c));
      });
      return str;
    },

    getImage: function(c) {
      if (!byChars[c]) {
        return '';
      }
      return '<img class="emojiuni" src="' + emoji.baseUrl + byChars[c].image + '" />';
    },

    $get: function() {
      return emoji;
    }

  };

  return emoji;

}]).filter('emojiuni', ["Emojiuni", function(Emojiuni) {
  return function(str) {
    return Emojiuni.compile(str);
  };

}]);