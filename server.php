<?php

	// receive the data from client
	$data = $_REQUEST; // store the data retrieved from ajax call
	$name = $data['star_name']; // collect the input from form input 'star_name'
	$distance = $_POST['star_distance'];

	// result array
	$result = array();

	// data array
	$star_details = array(
			array('name' => 'Proxima Centauri', 'distance' => '4.243',  'constellation' => 'Centaurus',         'evolution' => 'Red Dwarf'),
        array('name' => 'Alpha Centauri A', 'distance' => '4.37',   'constellation' => 'Centaurus',         'evolution' => 'Main Sequence'),
        array('name' => 'Alpha Centauri B', 'distance' => '4.37',   'constellation' => 'Centaurus',         'evolution' => 'Main Sequence'),
        array('name' => 'Barnards Star',    'distance' => '5.978',  'constellation' => 'Ophiuchus',         'evolution' => 'Red Dwarf'),
        array('name' => 'Wolf 359',         'distance' => '7.86',   'constellation' => 'Leo',               'evolution' => 'Red Dwarf'),
        array('name' => 'Lalande 21185',    'distance' => '8.31',   'constellation' => 'Ursa Major',        'evolution' => 'Red Dwarf'),
        array('name' => 'Sirius A',         'distance' => '8.60',   'constellation' => 'Canis Major',       'evolution' => 'Main Sequence'),
        array('name' => 'Sirius B',         'distance' => '8.60',   'constellation' => 'Canis Major',       'evolution' => 'White Dwarf'),
        array('name' => 'Luyten 726-8 A',   'distance' => '8.73',   'constellation' => 'Cetus',             'evolution' => 'Red Dwarf'),
        array('name' => 'Luyten 726-8 B',   'distance' => '8.73',   'constellation' => 'Cetus',             'evolution' => 'Red Dwarf'),
        array('name' => 'Ross 154',         'distance' => '	9.60',  'constellation' => 'Sagittarius',       'evolution' => 'Red Dwarf'),
        array('name' => 'Ross 248',         'distance' => '10.30',  'constellation' => 'Andromeda',         'evolution' => 'Red Dwarf'),
        array('name' => 'Epsilon Eridani',  'distance' => '10.475', 'constellation' => 'Eridanus',          'evolution' => 'Main Sequence'),
        array('name' => 'Lacaille 9352',    'distance' => '10.68',  'constellation' => 'Piscis Austrinus',  'evolution' => 'Red Dwarf'),
        array('name' => 'Ross 128',         'distance' => '11.03',  'constellation' => 'Virgo',             'evolution' => 'Red Dwarf'),
        array('name' => 'Luyten 789-6 A',   'distance' => '11.1',   'constellation' => 'Aquarius',          'evolution' => 'Red Dwarf'),
        array('name' => 'Luyten 789-6 B',   'distance' => '11.1',   'constellation' => 'Aquarius',          'evolution' => 'Red Dwarf'),
        array('name' => 'Luyten 789-6 C',   'distance' => '11.1',   'constellation' => 'Aquarius',          'evolution' => 'Red Dwarf'),
        array('name' => 'Procyon A',        'distance' => '11.46',  'constellation' => 'Canis Minor',       'evolution' => 'Main Sequence'),
        array('name' => 'Procyon B',        'distance' => '11.46',  'constellation' => 'Canis Minor',       'evolution' => 'White Dwarf')
	);

$distance_far = 5;
$distance_farther = 10;
$distance_farthest = 15;

// no distance selected, search for name
if ($distance  == null) {
	for( $count = 0 ; $count < count( $star_details ) ; $count++ ) {
		if( stripos( $star_details[$count]['name'] , $name ) !== false ) {
			array_push( $result , $star_details[$count] );
		}
	}
}
// distance selected..
else {
	for( $count = 0 ; $count < count( $star_details ) ; $count++ ) {
		if( $star_details[$count]['distance']  <= $distance ) {
			array_push( $result , $star_details[$count] );
		}
	}
}

	// Return Response as JSON
	echo json_encode( $result );

?>
