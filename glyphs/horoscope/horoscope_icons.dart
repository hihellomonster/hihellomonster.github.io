// Place fonts/horoscope.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: horoscope
//      fonts:
//       - asset: fonts/horoscope.ttf
import 'package:flutter/widgets.dart';

class Horoscope {
  Horoscope._();

  static const String _fontFamily = 'horoscope';

  static const IconData acuario = IconData(0xe900, fontFamily: _fontFamily);
  static const IconData aries = IconData(0xe901, fontFamily: _fontFamily);
  static const IconData cancer = IconData(0xe902, fontFamily: _fontFamily);
  static const IconData capricornio = IconData(0xe903, fontFamily: _fontFamily);
  static const IconData escorpion = IconData(0xe904, fontFamily: _fontFamily);
  static const IconData geminis = IconData(0xe905, fontFamily: _fontFamily);
  static const IconData leo = IconData(0xe906, fontFamily: _fontFamily);
  static const IconData libra = IconData(0xe907, fontFamily: _fontFamily);
  static const IconData piscis = IconData(0xe908, fontFamily: _fontFamily);
  static const IconData sagitario = IconData(0xe909, fontFamily: _fontFamily);
  static const IconData tauro = IconData(0xe90a, fontFamily: _fontFamily);
  static const IconData virgo = IconData(0xe90b, fontFamily: _fontFamily);
}
