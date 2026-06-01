import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = {
  electricGreen: '#32D74B',
  deepBlue: '#007AFF',
  darkNavy: '#0A1128',
  card: 'rgba(255,255,255,0.1)',
  text: '#FFFFFF',
};

const tabs = ['Home', 'Teams', 'Create', 'Chat', 'Profile'] as const;
type Tab = (typeof tabs)[number];

function Content({ tab }: { tab: Tab }) {
  const screen = useMemo(() => {
    switch (tab) {
      case 'Home':
        return 'City-filtered challenge feed and matchmaking recommendations.';
      case 'Teams':
        return 'Browse teams, join requests, invites, and team profile details.';
      case 'Create':
        return 'Create 5v5/6v6/7v7 challenges with public or private visibility.';
      case 'Chat':
        return 'Temporary match room chats with realtime Socket.io integration points.';
      case 'Profile':
        return 'User stats, badges, social graph, and settings.';
    }
  }, [tab]);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{tab}</Text>
      <Text style={styles.cardBody}>{screen}</Text>
    </View>
  );
}

export default function App() {
  const [tab, setTab] = useState<Tab>('Home');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://github.com/user-attachments/assets/b1ad18c8-a031-4082-bcad-bfbe70377f32' }} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtitle}>Play. Connect. Win.</Text>
      </View>

      <View style={styles.flowCard}>
        <Text style={styles.flowTitle}>Onboarding Flow</Text>
        <Text style={styles.flowText}>Signup → Complete profile → Join/create team → Challenges → Match room → Rate</Text>
      </View>

      <Content tab={tab} />

      <View style={styles.tabs}>
        {tabs.map((item) => (
          <TouchableOpacity key={item} style={[styles.tabBtn, tab === item && styles.tabBtnActive]} onPress={() => setTab(item)}>
            <Text style={styles.tabText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkNavy,
    padding: 20,
    gap: 14,
  },
  header: {
    alignItems: 'center',
    marginTop: 12,
  },
  logo: {
    width: 200,
    height: 120,
  },
  subtitle: {
    color: colors.electricGreen,
    fontWeight: '700',
    letterSpacing: 1,
  },
  flowCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 14,
  },
  flowTitle: {
    color: colors.deepBlue,
    fontSize: 16,
    fontWeight: '800',
  },
  flowText: {
    color: colors.text,
    marginTop: 8,
  },
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 20,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    padding: 16,
    justifyContent: 'center',
  },
  cardTitle: {
    color: colors.electricGreen,
    fontSize: 24,
    fontWeight: '900',
  },
  cardBody: {
    color: colors.text,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  tabs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  tabBtn: {
    borderRadius: 999,
    borderColor: colors.deepBlue,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,122,255,0.15)',
  },
  tabBtnActive: {
    backgroundColor: 'rgba(50,215,75,0.2)',
    borderColor: colors.electricGreen,
  },
  tabText: {
    color: colors.text,
    fontWeight: '700',
  },
});
