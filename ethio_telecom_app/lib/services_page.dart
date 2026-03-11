import 'package:flutter/material.dart';

class ServicesPage extends StatelessWidget {
  const ServicesPage({super.key});

  @override
  Widget build(BuildContext context) {
    final services = [
      {
        'title': 'Cloud Hosting',
        'desc': 'Reliable and scalable VPS and Dedicated server solutions hosted on Ethio Telecom infrastructure.',
        'icon': Icons.cloud_queue,
        'color': Colors.blue,
      },
      {
        'title': 'Enterprise Email',
        'desc': 'Professional email hosting for businesses of all sizes with top-tier security.',
        'icon': Icons.email_outlined,
        'color': Colors.orange,
      },
      {
        'title': 'Cloud Storage',
        'desc': 'Securely store and share your business data with robust cloud infrastructure.',
        'icon': Icons.storage,
        'color': Colors.green,
      },
      {
        'title': 'Disaster Recovery',
        'desc': 'Advanced backup and recovery solutions to keep your business running always.',
        'icon': Icons.settings_backup_restore,
        'color': Colors.red,
      },
      {
        'title': 'SaaS Solutions',
        'desc': 'Ready-to-use software applications (Clinic, Hospital, Inventory) for immediate deployment.',
        'icon': Icons.apps,
        'color': Colors.purple,
      },
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Target Services')),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: services.length,
        itemBuilder: (context, index) {
          final service = services[index];
          return Card(
            margin: const EdgeInsets.bottom(16),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            child: ExpansionTile(
              leading: CircleAvatar(
                backgroundColor: (service['color'] as Color).withOpacity(0.1),
                child: Icon(service['icon'] as IconData, color: service['color'] as Color),
              ),
              title: Text(service['title'] as String, style: const TextStyle(fontWeight: FontWeight.bold)),
              subtitle: const Text('Tap for details'),
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(service['desc'] as String, style: const TextStyle(fontSize: 15, height: 1.5)),
                      const SizedBox(height: 16),
                      ElevatedButton(
                        onPressed: () {},
                        child: const Text('Request Quote'),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}