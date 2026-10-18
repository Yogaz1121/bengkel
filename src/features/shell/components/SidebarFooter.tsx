import { StyleSheet, Text, View } from 'react-native';

/// Bagian bawah sidebar: avatar, nama, dan jabatan user.
export default function SidebarFooter() {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AS</Text>
      </View>
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.name}>Andi Setiawan</Text>
        <Text style={styles.role}>Service Advisor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#94A3B8', fontSize: 12, fontWeight: '600' },
  name: { color: 'white', fontWeight: '600', fontSize: 13 },
  role: { color: '#94A3B8', fontSize: 11, marginTop: 2 },
});
