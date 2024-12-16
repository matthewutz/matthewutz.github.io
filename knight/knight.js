rain = []

function setup() {
createCanvas(900, 600);
p = createVector(random(width), 200)
}

function draw() {
background(234, 254, 254);
//1 SKY
noFill();
strokeWeight(10);
stroke(180, 245, 243);
line(546, 16, 529, 12);
bezier(536, 4, 541, 4, 545, 2, 553, -4);
line(560, 0, 568, 2);
bezier(569, 7, 569, 12, 568, 15, 566, 19);
line(546, 17, 549, 25);
line(557, 23, 567, 22);
strokeWeight(1);
fill(180, 245, 243);
triangle(536, 0, 538, 78, 383, 0);
triangle(568, 0, 556, 126, 1000, 0);
triangle(534, 16, 574, 27, 537, 129);

//2 SKY
noFill();
strokeWeight(12);
stroke(123, 217, 215);
line(489, 2, 489, 11);
line(489, 11, 480, 28);
bezier(486, 35, 496, 31, 500, 35, 500, 43);
bezier(504, 46, 515, 53, 520, 57, 521, 64);
line(532, 65, 532, 67);
line(542, 63, 547, 69);
bezier(553, 67, 558, 59, 559, 57, 557, 48);
line(551, 45, 558, 39);
line(545, 39, 533, 36);
line(533, 36, 531, 31);
line(531, 31, 545, 39);
line(574, 30, 566, 38);
line(574, 30, 602, 51);
bezier(580, 34, 592, 28, 596, 32, 594, 44);
line(602, 51, 598, 69);
line(587, 75, 592, 82);
line(599, 89, 634, 70);
line(614, 77, 617, 75);
line(631, 61, 634, 69);
line(631, 57, 627, 52);
line(627, 52, 635, 40);
bezier(642, 37, 642, 28, 640, 25, 641, 23);
line(645, 19, 642, 11);
bezier(642, 11, 648, 10, 655, 8, 667, 0);
strokeWeight(4);
line(522, 29, 529, 33);
line(539, 46, 539, 39);
line(607, 69, 609, 66);
line(609, 66, 613, 67);
strokeWeight(1);
fill(123, 217, 215);
quad(453, 20, 467, 0, 491, 0, 476, 43);
ellipse(538, 69, 3, 3);
quad(545, 79, 560, 38, 596, 32, 592, 99);
triangle(606, 93, 626, 75, 641, 91);
quad(627, 53, 657, 0, 900, 0, 900, 234);

//1 SKY OVERLAP
noFill();
strokeWeight(8);
stroke(180, 245, 243);
bezier(742, 70, 747, 66, 750, 62, 750, 57);
strokeWeight(4);
line(751, 56, 752, 66);
line(752, 66, 746, 69);
strokeWeight(12);
bezier(822, 49, 832, 49, 841, 37, 839, 27);
strokeWeight(6);
bezier(824, 42, 823, 35, 821, 32, 820, 30);
bezier(820, 30, 822, 29, 827, 27, 829, 23);
bezier(829, 23, 831, 25, 827, 25, 840, 23);
strokeWeight(4);
line(817, 36, 820, 32);
line(817, 36, 822, 36);
line(844, 14, 842, 18);
line(833, 29, 828, 40);
strokeWeight(1);
fill(180, 245, 243);
triangle(827, 43, 821, 30, 836, 24);

//3 SKY
noFill();
strokeWeight(8);
stroke(80, 182, 183);
bezier(513, 60, 521, 70, 542, 78, 531, 72);
bezier(535, 75, 544, 74, 547, 75, 551, 81);
bezier(554, 81, 568, 77, 575, 81, 578, 94);
line(584, 94, 586, 90);
line(590, 86, 599, 95);
line(603, 93, 609, 96);
line(614, 96, 624, 91);
line(628, 90, 635, 82);
bezier(631, 78, 631, 73, 631, 68, 639, 63);
bezier(639, 59, 643, 52, 647, 50, 654, 44);
bezier(657, 44, 667, 43, 671, 51, 682, 55);
bezier(681, 56, 681, 61, 683, 64, 677, 66);
line(676, 68, 677, 83);
line(683, 80, 687, 84);
line(687, 84, 679, 86);
line(679, 90, 685, 95);
line(692, 97, 704, 96);
bezier(704, 96, 708, 102, 717, 104, 725, 103);
line(731, 105, 747, 92);
line(752, 91, 752, 93);
bezier(759, 92, 763, 79, 769, 74, 772, 62);
line(769, 59, 780, 53);
bezier(774, 50, 771, 37, 772, 32, 778, 27);
line(778, 27, 775, 49);
bezier(784, 57, 793, 44, 794, 26, 796, 25);
bezier(796, 25, 800, 14, 807, 13, 812, 8);
line(812, 8, 813, 0);
line(806, 16, 812, 0);
bezier(788, 3, 795, 3, 797, 4, 802, 15);
line(791, 42, 800, 32);
line(806, 36, 811, 40);
line(811, 40, 801, 47);
bezier(800, 48, 803, 54, 803, 58, 802, 67);
line(804, 69, 818, 77);
bezier(826, 64, 829, 63, 832, 61, 837, 56);
line(837, 56, 843, 56);
line(843, 56, 854, 38);
bezier(854, 38, 859, 36, 864, 39, 868, 45);
bezier(881, 25, 870, 25, 873, 25, 869, 22);
line(865, 16, 859, 22);
line(854, 17, 855, 12);
bezier(854, 0, 854, 1, 856, 3, 858, 5);
bezier(688, 64, 687, 56, 688, 51, 697, 44);
bezier(705, 44, 710, 36, 714, 31, 720, 31);
line(726, 33, 736, 27);
line(741, 22, 743, 49);
line(749, 26, 746, 40);
line(756, 27, 753, 37);
line(751, 39, 746, 41);
line(739, 58, 739, 45);
line(727, 66, 737, 56);
line(717, 67, 722, 63);
line(710, 73, 713, 67);
line(703, 74, 701, 76);
bezier(701, 76, 698, 74, 696, 70, 694, 64);
line(687, 64, 695, 64);
bezier(469, 1, 464, 5, 462, 9, 460, 14);
strokeWeight(4);
line(632, 75, 648, 52);
line(661, 48, 675, 56);
line(723, 62, 731, 55);
strokeWeight(1);
fill(80, 182, 183);
triangle(522, 73, 573, 83, 585, 150);
quad(572, 96, 589, 90, 684, 133, 576, 178);
quad(610, 100, 636, 80, 677, 62, 682, 131);
triangle(631, 81, 654, 44, 684, 61);
quad(684, 54, 701, 44, 742, 50, 701, 74);
quad(704, 45, 717, 32, 742, 29, 738, 52);
quad(677, 94, 767, 112, 765, 157, 670, 128);
quad(733, 107, 746, 92, 786, 90, 763, 119);
quad(760, 92, 775, 55, 803, 34, 800, 99);
triangle(804, 11, 793, 0, 811, 0);
triangle(834, 63, 857, 38, 887, 62);
quad(857, 0, 857, 17, 894, 28, 900, 0);
triangle(464, 0, 453, 19, 444, 0);
ellipse(706, 71, 4, 4);
ellipse(803, 39, 4, 4);
ellipse(778, 48, 10, 8);
ellipse(788, 40, 5, 3);

//4 SKY
noFill();
strokeWeight(12);
stroke(37, 127, 125);
line(541, 96, 520, 80);
line(552, 101, 554, 106);
bezier(551, 114, 562, 118, 562, 127, 572, 133);
line(582, 125, 579, 136);
line(583, 133, 583, 126);
bezier(579, 140, 593, 150, 607, 152, 617, 146);
bezier(618, 146, 625, 144, 629, 146, 633, 152);
line(638, 145, 637, 153);
bezier(645, 140, 643, 132, 647, 129, 657, 132);
bezier(660, 125, 655, 116, 655, 121, 649, 116);
line(643, 109, 642, 112);
line(651, 110, 649, 116);
bezier(659, 118, 667, 109, 676, 110, 685, 114);
line(696, 113, 699, 119);
line(707, 117, 698, 121);
line(696, 113, 699, 119);
bezier(707, 117, 712, 123, 700, 121, 725, 118);
line(714, 115, 714, 120);
line(730, 121, 737, 122);
bezier(738, 130, 747, 132, 750, 136, 746, 145);
line(756, 147, 759, 142);
bezier(760, 142, 769, 136, 768, 135, 765, 127);
bezier(763, 125, 758, 124, 754, 120, 757, 120);
bezier(757, 120, 762, 93, 780, 102, 791, 70);
line(784, 67, 790, 69);
line(791, 63, 790, 68);
bezier(791, 69, 800, 75, 802, 78, 819, 81);
line(820, 78, 825, 68);
bezier(825, 68, 837, 71, 848, 66, 854, 57);
line(863, 53, 863, 55);
line(869, 51, 896, 16);
line(889, 9, 885, 5);
line(879, 2, 900, 0);
line(619, 114, 626, 118);
line(618, 124, 630, 128);
line(622, 130, 627, 131);
line(606, 126, 610, 128);
strokeWeight(1);
fill(37, 127, 125);
quad(528, 95, 551, 100, 588, 156, 507, 159);
quad(551, 149, 669, 144, 900, 159, 639, 341);
triangle(900, 165, 900, 352, 724, 264);
quad(640, 145, 665, 110, 737, 123, 753, 172);
triangle(759, 150, 774, 125, 774, 157);
triangle(761, 114, 793, 72, 829, 98);
triangle(816, 77, 877, 46, 882, 117);
ellipse(897, 9, 10, 6);

//5 SKY
noFill();
strokeWeight(16);
stroke(29, 69, 72);
bezier(661, 285, 682, 267, 691, 256, 701, 234);
line(694, 226, 706, 219);
bezier(687, 213, 698, 202, 712, 194, 743, 190);
line(740, 181, 722, 165);
line(707, 172, 721, 165);
line(707, 172, 687, 159);
bezier(680, 160, 668, 154, 668, 142, 676, 140);
line(676, 140, 694, 142);
bezier(694, 142, 704, 150, 715, 145, 725, 148);
line(725, 148, 759, 166);
bezier(759, 166, 775, 155, 780, 148, 783, 128);
line(783, 128, 769, 120);
bezier(769, 120, 780, 117, 796, 107, 803, 92);
bezier(803, 92, 810, 92, 817, 86, 823, 82);
bezier(823, 82, 833, 90, 855, 88, 864, 74);
bezier(874, 78, 885, 64, 884, 54, 880, 45);
bezier(880, 45, 889, 39, 897, 33, 908, 22);
line(899, 189, 881, 199);
line(881, 199, 879, 185);
line(879, 185, 852, 201);
line(852, 201, 856, 208);
line(856, 208, 839, 209);
line(839, 209, 833, 214);
bezier(829, 212, 816, 224, 818, 234, 825, 243);
line(825, 243, 816, 244);
line(816, 244, 803, 235);
line(803, 235, 796, 247);
bezier(796, 247, 759, 247, 776, 292, 815, 281);
line(827, 287, 845, 289);
bezier(845, 289, 858, 301, 875, 308, 900, 310);
ellipse(904, 278, 6, 8);
ellipse(901, 0, 5, 4);
line(889, 239, 904, 254);
strokeWeight(1);
fill(29, 69, 72);
quad(900, 489, 663, 489, 663, 284, 900, 312);
quad(666, 285, 708, 211, 778, 251, 793, 308);
quad(783, 278, 844, 287, 862, 313, 781, 305);
quad(697, 212, 762, 173, 826, 221, 770, 257);
quad(737, 177, 783, 150, 854, 200, 805, 230);
quad(783, 150, 784, 119, 887, 179, 839, 207);
quad(779, 121, 822, 81, 900, 86, 900, 192);
quad(874, 85, 883, 43, 900, 30, 900, 89);
quad(677, 140, 679, 159, 749, 178, 760, 163);
ellipse(697, 214, 8, 8);
ellipse(887, 185, 4, 4);
ellipse(811, 231, 4, 4);
ellipse(867, 82, 6, 6);

//6 SKY OVERLAP
noFill();
strokeWeight(12);
stroke(11, 37, 40);
line(729, 303, 730, 324);
bezier(730, 324, 747, 326, 765, 315, 766, 301);
bezier(766, 301, 767, 296, 762, 290, 755, 289);
bezier(755, 289, 748, 296, 736, 300, 729, 303);
line(748, 322, 762, 341);
line(762, 341, 750, 351);
line(750, 351, 750, 365);
line(750, 365, 742, 371);
bezier(742, 371, 749, 374, 757, 370, 765, 368);
bezier(765, 368, 765, 378, 764, 385, 762, 388);
bezier(762, 388, 764, 390, 772, 388, 778, 384);
bezier(778, 384, 782, 388, 788, 391, 788, 391);
line(788, 391, 795, 390);
line(795, 390, 802, 384);
line(809, 387, 808, 393);
bezier(808, 393, 817, 384, 823, 380, 844, 377);
line(844, 377, 869, 368);
line(869, 355, 863, 363);
line(857, 343, 853, 359);
bezier(849, 342, 824, 337, 815, 329, 807, 316);
line(807, 316, 795, 313);
line(795, 313, 777, 323);
line(777, 323, 765, 307);
strokeWeight(1);
fill(11, 37, 40);
quad(731, 304, 734, 324, 766, 307, 757, 289);
quad(754, 322, 753, 368, 865, 368, 762, 311);
quad(767, 365, 766, 386, 816, 387, 862, 366);
quad(780, 326, 799, 314, 855, 348, 851, 364);

//4 SKY OVERLAP
noFill();
strokeWeight(10);
stroke(37, 127, 125);
bezier(793, 427, 799, 430, 804, 434, 805, 449);
line(796, 430, 800, 447);
bezier(812, 417, 809, 423, 810, 427, 811, 432);
line(819, 437, 817, 430);
line(825, 433, 834, 425);
bezier(833, 432, 836, 439, 842, 443, 852, 443);
bezier(852, 443, 857, 449, 863, 449, 873, 444);
bezier(873, 444, 890, 451, 883, 462, 890, 463);
line(890, 463, 900, 460);
bezier(836, 425, 843, 423, 853, 419, 858, 412);
line(858, 412, 868, 411);
bezier(871, 408, 880, 412, 890, 410, 900, 403);
strokeWeight(3);
fill(37, 127, 125);
triangle(831, 431, 900, 460, 900, 401);

//MIDDLE MOUNTAIN
noFill();
strokeWeight(12);
stroke(11, 37, 40);
line(446, 6, 448, 20);
line(455, 20, 457, 31);
line(466, 27, 466, 40);
line(477, 37, 475, 44);
line(486, 36, 492, 40);
line(490, 45, 500, 53);
line(493, 51, 503, 51);
line(503, 51, 512, 61);
line(512, 61, 510, 71);
bezier(510, 71, 524, 77, 530, 90, 524, 103);
bezier(523, 108, 537, 109, 535, 120, 537, 139);
line(537, 139, 552, 139);
line(547, 143, 558, 145);
line(565, 149, 568, 169);
bezier(574, 169, 582, 190, 596, 211, 617, 227);
line(617, 227, 620, 251);
line(618, 253, 624, 251);
line(624, 256, 639, 263);
bezier(644, 269, 651, 268, 676, 296, 701, 314);
line(701, 321, 709, 332);
bezier(709, 340, 716, 352, 718, 354, 725, 364);
line(725, 364, 725, 381);
bezier(725, 381, 733, 397, 736, 404, 748, 415);
line(748, 415, 754, 439);
strokeWeight(4);
line(632, 266, 663, 289);
strokeWeight(1);
fill(11, 37, 40);
quad(0, 0, 445, 0, 485, 355, 0, 355);
quad(753, 435, 697, 314, 470, 281, 480, 447);
quad(693, 313, 614, 251, 465, 223, 470, 287);
quad(619, 255, 613, 224, 460, 201, 461, 230);
quad(609, 224, 559, 146, 451, 120, 462, 204);
quad(537, 142, 507, 54, 441, 40, 453, 128);
quad(487, 51, 485, 39, 448, 24, 447, 43);
ellipse(518, 85, 6, 6);
ellipse(509, 105, 8, 8);

//MIDDLE MOUNTAIN HIGHLIGHTS
noFill();
strokeWeight(13);
stroke(29, 69, 72);
bezier(420, 225, 399, 201, 381, 150, 406, 136);
bezier(406, 136, 443, 130, 448, 119, 456, 101);
line(456, 101, 461, 123);
line(471, 121, 474, 128);
line(467, 136, 467, 150);
line(467, 150, 448, 163);
line(446, 170, 425, 168);
line(432, 171, 427, 191);
bezier(434, 194, 437, 202, 433, 208, 423, 211);
strokeWeight(7);
line(409, 2, 397, 43);
bezier(399, 35, 399, 26, 400, 21, 405, 16);
line(413, 15, 414, 30);
line(422, 17, 420, 21);
line(433, 12, 432, 18);
line(433, 12, 427, 19);
bezier(399, 35, 408, 29, 417, 23, 432, 18);
strokeWeight(11);
line(459, 294, 447, 338);
line(416, 293, 426, 290);
bezier(426, 290, 440, 300, 454, 304, 466, 306);
line(466, 306, 467, 318);
bezier(451, 343, 457, 326, 461, 323, 467, 318);
line(509, 363, 633, 367);
line(518, 361, 525, 353);
line(533, 353, 538, 344);
line(546, 345, 556, 328);
bezier(565, 324, 562, 314, 562, 313, 565, 312);
bezier(573, 315, 583, 302, 581, 293, 574, 286);
line(585, 278, 598, 283);
line(601, 292, 600, 298);
line(603, 309, 604, 324);
line(613, 323, 622, 318);
line(631, 317, 638, 329);
line(640, 331, 650, 336);
line(650, 336, 654, 348);
bezier(654, 348, 642, 355, 639, 373, 648, 384);
line(657, 391, 644, 422);
line(663, 399, 662, 426);
line(663, 410, 682, 432);
line(575, 286, 585, 286);
strokeWeight(18);
bezier(504, 255, 511, 246, 518, 226, 523, 221);
line(523, 221, 532, 222);
bezier(542, 230, 552, 236, 549, 245, 532, 245);
bezier(504, 255, 511, 256, 517, 252, 529, 244);
strokeWeight(12);
line(224, 0, 242, 15);
line(252, 17, 252, 28);
line(252, 28, 265, 23);
line(268, 31, 262, 40);
bezier(269, 47, 281, 50, 286, 56, 288, 68);
bezier(288, 68, 294, 53, 300, 46, 310, 42);
bezier(310, 42, 310, 28, 315, 20, 331, 14);
line(331, 14, 314, 12);
line(318, 10, 310, 0);
strokeWeight(10);
line(286, 88, 288, 84);
strokeWeight(4);
line(288, 80, 288, 71);
strokeWeight(1);
fill(29, 69, 72);
quad(232, 0, 270, 35, 314, 31, 312, 0);
triangle(262, 33, 313, 29, 288, 61);
ellipse(268, 41, 2, 2);
triangle(409, 13, 402, 29, 413, 25);
quad(398, 144, 456, 111, 473, 129, 441, 170);
ellipse(460, 146, 4, 4);
quad(404, 302, 427, 291, 467, 310, 448, 342);
ellipse(529, 233, 12, 12);
quad(558, 327, 439, 419, 671, 420, 639, 360);
quad(578, 339, 628, 317, 653, 343, 639, 371);
quad(606, 350, 598, 282, 582, 285, 562, 331);

//LEFT MOUNTAIN
noFill();
strokeWeight(12);
stroke(0, 8, 9);
bezier(220, 0, 231, 10, 238, 17, 239, 25);
line(239, 25, 237, 71);
line(237, 71, 247, 72);
line(247, 72, 243, 83);
line(243, 83, 248, 85);
line(248, 85, 247, 91);
line(247, 91, 253, 94);
line(253, 94, 248, 109);
line(248, 109, 253, 110);
line(253, 110, 247, 121);
line(247, 121, 254, 125);
line(254, 125, 249, 142);
bezier(249, 142, 259, 141, 266, 149, 268, 159);
line(268, 159, 277, 156);
bezier(277, 156, 289, 170, 300, 178, 314, 181);
strokeWeight(1);
fill(0, 8, 9);
quad(0, 0, 219, 0, 236, 365, 0, 365);
triangle(236, 365, 317, 185, 215, 127);
quad(244, 75, 252, 151, 213, 139, 216, 62);
quad(215, 5, 237, 19, 237, 77, 214, 67);

//LEFT MOUNTAIN HIGHLIGHTS
noFill();
strokeWeight(16);
stroke(11, 37, 40);
line(254, 234, 253, 229);
bezier(253, 229, 268, 218, 277, 208, 293, 199);
line(262, 208, 264, 218);
line(259, 243, 265, 243);
strokeWeight(12);
bezier(68, 134, 70, 131, 78, 129, 84, 130);
line(75, 136, 91, 161);
line(103, 171, 95, 138);
line(103, 143, 105, 153);
bezier(108, 158, 108, 165, 107, 169, 103, 171);
line(95, 139, 82, 139);
line(111, 49, 112, 52);
strokeWeight(7);
line(103, 43, 113, 63);
line(105, 58, 109, 51);
line(105, 58, 113, 58);
line(117, 70, 121, 67);
line(117, 78, 121, 67);
bezier(117, 84, 120, 79, 122, 72, 122, 67);
line(116, 62, 119, 47);
bezier(103, 43, 108, 43, 115, 44, 119, 47);
line(116, 65, 117, 65);
line(88, 144, 92, 151);
strokeWeight(12);
line(1, 203, 1, 254);
bezier(8, 210, 17, 205, 23, 207, 36, 222);
line(36, 222, 53, 216);
line(54, 214, 58, 197);
line(56, 194, 63, 202);
bezier(62, 198, 74, 188, 81, 194, 83, 209);
line(93, 214, 95, 218);
line(92, 224, 93, 235);
line(106, 225, 104, 236);
line(106, 242, 119, 247);
bezier(123, 237, 119, 218, 130, 216, 135, 230);
line(134, 240, 149, 248);
line(149, 248, 163, 227);
line(168, 232, 180, 217);
line(180, 217, 184, 219);
line(187, 232, 167, 232);
bezier(180, 241, 185, 247, 187, 253, 186, 263);
line(186, 263, 199, 261);
line(204, 265, 215, 256);
line(220, 265, 214, 272);
line(227, 273, 231, 301);
bezier(235, 293, 247, 287, 248, 282, 249, 272);
line(184, 227, 186, 230);
line(129, 232, 123, 254);
strokeWeight(6);
line(198, 238, 187, 233);
bezier(122, 215, 119, 209, 122, 202, 126, 197);
line(131, 204, 126, 197);
strokeWeight(1);
fill(11, 37, 40);
triangle(2, 207, 231, 284, 0, 900);
ellipse(98, 238, 3, 3);
quad(46, 223, 70, 191, 95, 218, 91, 240);
quad(129, 243, 179, 231, 188, 275, 118, 251);
triangle(182, 270, 211, 259, 227, 287);
ellipse(220, 274, 11, 11);
quad(200, 351, 221, 296, 257, 285, 244, 382);

//BLACK GROUND
noFill();
strokeWeight(12);
stroke(0);
bezier(0, 254, 5, 250, 19, 266, 35, 267);
bezier(35, 267, 69, 238, 84, 244, 102, 276);
bezier(102, 276, 119, 295, 132, 303, 154, 315);
bezier(154, 315, 192, 344, 203, 349, 234, 363);
bezier(234, 363, 370, 390, 370, 390, 527, 408);
bezier(527, 408, 570, 412, 582, 414, 620, 408);
bezier(620, 408, 640, 425, 650, 429, 686, 425);
bezier(686, 425, 714, 438, 735, 441, 770, 440);
bezier(770, 440, 809, 456, 860, 465, 900, 484);
strokeWeight(0);
fill(0);
ellipse(615, 410, 30, 16);
ellipse(684, 427, 30, 16);
ellipse(766, 441, 30, 16);
quad(0, 305, 900, 487, 900, 600, 0, 600);
strokeWeight(2);
quad(549, 416, 622, 416, 774, 445, 882, 483);
quad(25, 314, 37, 263, 77, 248, 183, 342);
quad(25, 314, 37, 263, 0, 253, 0, 312);

//BLACK KNIGHT
noFill();
strokeWeight(4);
bezier(231, 360, 240, 341, 240, 326, 243, 308);
bezier(243, 308, 243, 306, 244, 301, 248, 301);
bezier(248, 301, 250, 290, 243, 265, 243, 265);
bezier(243, 265, 244, 257, 245, 255, 253, 247);
bezier(253, 247, 266, 238, 276, 212, 288, 197);
bezier(288, 197, 290, 192, 305, 190, 311, 188);
bezier(311, 188, 326, 173, 334, 168, 350, 169);
bezier(350, 169, 365, 162, 378, 152, 396, 145);
bezier(396, 145, 419, 144, 429, 155, 431, 185);
line(431, 185, 440, 190);
line(440, 190, 427, 209);
line(427, 209, 422, 210);
line(422, 210, 422, 215);
line(422, 215, 398, 233);
line(398, 233, 412, 250);
bezier(412, 250, 412, 257, 414, 269, 411, 282);
strokeWeight(0);
fill(0);
ellipse(411, 291, 16, 22);
noFill();
strokeWeight(4);
bezier(413, 304, 417, 305, 419, 311, 421, 313);
bezier(421, 313, 435, 316, 448, 318, 452, 323);
bezier(452, 323, 454, 328, 453, 331, 448, 335);
bezier(448, 335, 480, 346, 504, 356, 509, 365);
strokeWeight(0);
fill(0);
ellipse(484, 353, 20, 22);
noFill();
strokeWeight(4);
bezier(509, 365, 521, 368, 525, 372, 526, 376);
line(526, 376, 526, 406);
strokeWeight(1);
fill(0);
quad(412, 301, 411, 251, 291, 194, 260, 241);
quad(412, 301, 260, 241, 247, 255, 420, 316);
quad(234, 353, 245, 301, 525, 373, 525, 420);
quad(246, 254, 243, 264, 451, 335, 451, 321);
quad(243, 264, 248, 304, 483, 363, 479, 344);
quad(291, 194, 313, 186, 398, 233, 409, 250);
quad(397, 233, 349, 169, 395, 145, 421, 214);
quad(309, 189, 329, 172, 353, 168, 399, 233);
quad(393, 146, 413, 148, 427, 207, 421, 213);
quad(425, 208, 417, 183, 431, 185, 438, 190);
quad(414, 150, 422, 155, 429, 184, 419, 184);
triangle(487, 363, 514, 370, 493, 354);
strokeWeight(3);
line(423, 162, 429, 181);
line(512, 367, 520, 371);
line(424, 164, 426, 170);

//GREY KNIGHT
noFill();
strokeWeight(4);
stroke(59, 59, 59);
bezier(283, 261, 292, 273, 308, 282, 327, 288);
bezier(337, 282, 348, 274, 353, 267, 356, 255);
bezier(356, 255, 357, 254, 354, 246, 351, 246);
bezier(334, 295, 339, 290, 346, 288, 354, 286);
line(409, 249, 411, 246);
bezier(411, 246, 414, 255, 415, 260, 412, 275);
bezier(381, 267, 385, 264, 388, 264, 390, 256);
bezier(386, 273, 388, 267, 390, 264, 390, 256);
line(340, 243, 348, 250);
line(351, 246, 345, 260);
line(339, 256, 353, 255);
bezier(339, 201, 343, 205, 347, 210, 350, 214);
bezier(320, 206, 324, 205, 329, 204, 335, 204);
bezier(326, 201, 329, 202, 332, 203, 335, 204);
line(296, 211, 301, 207);
line(277, 226, 282, 220);
bezier(287, 221, 290, 218, 293, 216, 298, 215);
bezier(303, 213, 306, 208, 311, 204, 318, 200);
bezier(297, 203, 303, 200, 309, 199, 318, 200);
bezier(287, 198, 293, 198, 297, 196, 301, 192);
bezier(301, 192, 308, 195, 314, 195, 329, 196);
line(326, 193, 333, 198);
line(344, 272, 350, 265);
bezier(369, 253, 375, 255, 380, 253, 385, 247);
bezier(374, 258, 379, 257, 382, 256, 386, 252);
bezier(378, 262, 382, 261, 384, 259, 386, 255);
line(386, 249, 377, 254);
line(380, 258, 376, 255);
line(321, 381, 327, 385);
bezier(328, 417, 334, 408, 337, 403, 339, 395);
bezier(363, 377, 357, 380, 355, 382, 352, 386);
line(373, 376, 384, 385);
bezier(384, 385, 388, 386, 391, 387, 394, 390);
line(382, 383, 370, 393);
line(376, 415, 387, 399);
bezier(408, 389, 397, 393, 393, 397, 383, 412);
line(410, 405, 425, 392);
bezier(394, 430, 413, 432, 434, 432, 454, 428);
line(394, 430, 420, 412);
bezier(420, 412, 416, 407, 413, 405, 410, 405);
bezier(425, 392, 436, 401, 443, 411, 449, 423);
line(449, 423, 453, 427);
line(489, 400, 501, 410);
bezier(489, 391, 495, 393, 501, 396, 506, 400);
bezier(493, 384, 501, 385, 507, 387, 511, 391);
bezier(495, 376, 502, 377, 508, 379, 512, 383);
strokeWeight(2);
line(497, 367, 503, 372);
bezier(497, 362, 500, 364, 503, 366, 504, 368);
line(500, 360, 505, 364);
line(502, 358, 507, 362);
bezier(403, 261, 405, 265, 409, 269, 413, 272);
strokeWeight(5);
line(304, 228, 335, 247);
line(335, 247, 335, 238);
bezier(335, 238, 330, 231, 321, 225, 307, 224);
line(307, 224, 304, 228);
bezier(306, 233, 306, 237, 320, 246, 327, 244);
line(339, 250, 351, 251);
line(341, 263, 349, 265);
bezier(313, 218, 320, 210, 331, 211, 343, 218);
line(343, 218, 352, 236);
bezier(352, 236, 327, 219, 320, 218, 313, 219);
strokeWeight(4);
bezier(365, 188, 358, 181, 354, 174, 352, 166);
fill(59, 59, 59);
quad(352, 167, 365, 178, 366, 167, 363, 162);
line(366, 180, 359, 177);
line(400, 236, 406, 243);
line(406, 243, 401, 246);
line(401, 246, 397, 238);
line(397, 238, 400, 236);
line(318, 182, 333, 170);
line(333, 170, 343, 169);
line(343, 169, 355, 191);
bezier(355, 191, 349, 189, 343, 189, 337, 191);
line(337, 191, 317, 182);
line(414, 304, 420, 312);
line(420, 312, 414, 315);
line(414, 315, 405, 310);
line(405, 310, 414, 304);
line(321, 385, 325, 387);
line(380, 329, 445, 358);
line(445, 358, 442, 363);
line(442, 363, 371, 339);
line(371, 339, 380, 329);
line(439, 329, 472, 347);
line(472, 347, 465, 354);
line(465, 354, 427, 340);
line(427, 340, 439, 329);
line(472, 356, 482, 343);
bezier(482, 343, 487, 343, 490, 345, 492, 350);
line(490, 351, 478, 358);
line(478, 358, 472, 356);
line(340, 317, 330, 311);
bezier(330, 311, 334, 305, 340, 301, 347, 298);
line(347, 298, 354, 307);
bezier(354, 307, 349, 309, 343, 313, 340, 317);
line(460, 359, 481, 372);
line(481, 372, 480, 378);
line(480, 378, 458, 374);
bezier(458, 374, 460, 369, 460, 364, 460, 359);
bezier(368, 159, 383, 150, 390, 143, 400, 145);
bezier(400, 145, 415, 143, 424, 152, 429, 167);
noFill();
bezier(422, 170, 400, 156, 383, 155, 368, 159);
line(422, 169, 420, 160);
line(427, 166, 421, 162);
line(327, 394, 335, 404);
line(335, 404, 339, 396);
line(339, 396, 331, 390);
line(331, 390, 327, 394);
line(352, 386, 347, 393);
line(347, 393, 354, 394);
line(354, 394, 354, 402);
line(354, 402, 344, 401);
line(344, 401, 342, 404);
bezier(342, 404, 348, 404, 353, 406, 358, 408);
bezier(358, 408, 358, 400, 362, 393, 368, 388);
line(368, 388, 353, 386);
line(370, 394, 366, 400);
bezier(366, 400, 370, 401, 374, 399, 379, 403);
line(379, 403, 378, 407);
line(378, 407, 369, 407);
bezier(369, 407, 372, 408, 376, 408, 379, 409);
line(379, 409, 386, 399);
bezier(386, 399, 381, 395, 376, 394, 370, 394);
line(387, 410, 396, 410);
line(396, 410, 410, 397);
line(410, 397, 396, 398);
strokeWeight(1);
fill(59, 59, 59);
ellipse(357, 174, 5, 5);
ellipse(352, 252, 10, 10);
quad(327, 394, 335, 402, 338, 396, 331, 391);
quad(348, 392, 359, 398, 366, 388, 352, 386);
triangle(357, 394, 347, 403, 358, 407);
quad(367, 399, 383, 404, 385, 398, 370, 393);
quad(393, 397, 385, 409, 396, 409, 407, 397);
triangle(411, 404, 453, 428, 425, 391);
triangle(420, 411, 395, 430, 453, 429);
strokeWeight(4);
line(419, 409, 451, 427);
line(398, 237,  404, 243);
line(307, 232, 322, 242);
strokeWeight(1);
quad(318, 181, 333, 169, 343, 169, 354, 190);
triangle(318, 181, 352, 188, 335, 190);
quad(375, 155, 419, 166, 420, 153, 398, 144);
ellipse(419, 165, 4, 4);
quad(315, 217, 349, 232, 342, 217, 325, 211);
quad(304, 227, 334, 245, 334, 235, 308, 223);
quad(330, 310, 346, 297, 353, 306, 339, 317);
quad(406, 309, 413, 314, 419, 311, 413, 304);
quad(347, 255, 344, 262, 353, 264, 355, 255);
quad(371, 338, 442, 362, 444, 358, 380, 328);
quad(427, 339, 465, 354, 471, 346, 439, 329);
quad(460, 359, 458, 374, 479, 377, 480, 371);
quad(482, 342, 472, 355, 478, 357, 491, 348);
ellipse(382, 256, 4, 4);

//WHITE KNIGHT
noFill();
strokeWeight(4);
stroke(182, 200, 214);
bezier(345, 275, 349, 272, 352, 267, 354, 260);
bezier(382, 260, 384, 259, 385, 257, 385, 255);
bezier(380, 253, 382, 252, 383, 252, 384, 250);
bezier(318, 217, 321, 216, 325, 218, 329, 220);
bezier(354, 169, 355, 173, 357, 177, 361, 181);
line(361, 181, 359, 167);
line(359, 167, 354, 169);
line(398, 236, 404, 244);
line(356, 169, 358, 174);
line(375, 338, 437, 359);
line(437, 359, 380, 332);
line(380, 332, 375, 338);
line(430, 336, 465, 350);
line(465, 350, 435, 331);
line(435, 331, 430, 336);
line(480, 375, 458, 370);
line(458, 370, 459, 362);
line(459, 362, 480, 375);
bezier(335, 173, 340, 174, 344, 176, 349, 181);
strokeWeight(3);
line(481, 344, 473, 355);
line(473, 355, 477, 354);
line(477, 354, 478, 348);
line(487, 352, 478, 357);
line(478, 357, 478, 354);
line(478, 354, 487, 352);
bezier(411, 245, 414, 255, 414, 263, 412, 274);
line(490, 400, 498, 407);
bezier(491, 392, 495, 393, 499, 395, 503, 397);
bezier(496, 384, 500, 384, 504, 386, 507, 388);
bezier(498, 376, 503, 378, 506, 378, 509, 381);
bezier(361, 378, 359, 379, 357, 381, 354, 383);
strokeWeight(5);
bezier(310, 226, 310, 233, 315, 238, 320, 240);
line(320, 240, 327, 233);
bezier(327, 233, 322, 228, 316, 225, 310, 226);
bezier(390, 151, 399, 146, 414, 147, 424, 159);
bezier(408, 158, 403, 154, 396, 151, 390, 151);
bezier(418, 162, 416, 157, 410, 152, 404, 150);
line(398, 149, 409, 155);
line(415, 153, 416, 155);
bezier(356, 387, 359, 387, 363, 387, 365, 390);
bezier(371, 397, 376, 396, 381, 398, 384, 401);
line(393, 399, 403, 400);
line(403, 400, 398, 406);
bezier(398, 406, 394, 407, 391, 404, 393, 399);
bezier(417, 427, 427, 429, 440, 429, 451, 428);
line(447, 426, 433, 416);
line(433, 416, 425, 417);
line(425, 417, 417, 427);
line(394, 402, 397, 402);
strokeWeight(1);
line(497, 367, 500, 370);
line(500, 360, 503, 362);
line(501, 357, 504, 360);
fill(182, 200, 214);
quad(418, 426, 446, 428, 433, 416, 425, 417);
triangle(458, 369, 472, 372, 459, 362);
triangle(430, 335, 451, 343, 435, 331);
triangle(375, 337, 418, 351, 380, 332);
quad(309, 227, 318, 239, 326, 233, 315, 226);

for (let i = 0; i < 4; i++){
  rain.push(new Rain(random(width), 0, 0))
}
  
for (let r of rain){
  r.show()
  r.update()
}

}
class Rain{
  constructor(x, y){
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(11, 14))
    this.length = random(40, 60)
    this.strength = random(255)
  }
  show(){
    stroke(234, 254, 254, this.strength)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length)
  }
  
  update(){
    this.pos.add(this.vel)
    if (this.pos.y > height + 100){
      rain.shift()
    }
  }
}
