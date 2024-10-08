import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {icons} from '../constants/onboarding';
import {colors} from '../constants/colors';
import {formatDate, formatTime} from '../lib/utils';
import {Ride} from '../types/ride';

const RideCard = ({ride}: {ride: Ride}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            style={styles.mapImage}
          />

          <View style={styles.addressContainer}>
            <View style={styles.addressRow}>
              <Image source={icons.to} style={styles.icon} />
              <Text style={styles.addressText} numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>

            <View style={styles.addressRow}>
              <Image source={icons.point} style={styles.icon} />
              <Text style={styles.addressText} numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date & Time</Text>
            <Text style={styles.detailValue} numberOfLines={1}>
              {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Driver</Text>
            <Text style={styles.detailValue}>
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Car Seats</Text>
            <Text style={styles.detailValue}>{ride.driver.car_seats}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Payment Status</Text>
            <Text
              style={[
                styles.paymentStatus,
                ride.payment_status === 'paid'
                  ? styles.paymentPaid
                  : styles.paymentUnpaid,
              ]}>
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary['100'],
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    marginBottom: 12,
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapImage: {
    width: 80,
    height: 90,
    borderRadius: 10,
  },
  addressContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    gap: 10,
    flex: 1,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  addressText: {
    fontSize: 16,
    fontFamily: 'JakartaMedium',
  },
  detailsContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.secondary['200'],
    borderRadius: 10,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontFamily: 'JakartaMedium',
    color: colors.secondary['800'],
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'JakartaBold',
  },
  paymentStatus: {
    fontSize: 16,
    fontFamily: 'JakartaBold',
    textTransform: 'capitalize',
  },
  paymentPaid: {
    color: colors.success['500'],
  },
  paymentUnpaid: {
    color: colors.danger['600'],
  },
});

export default RideCard;
