import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export function usePortfolioData() {
  const [data, setData] = useState({
    settings: null,
    projects: [],
    experiences: [],
    skills: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchAllData() {
      try {
        setLoading(true);

        // Fetch all tables in parallel
        const [
          { data: settingsData, error: settingsError },
          { data: projectsData, error: projectsError },
          { data: experiencesData, error: experiencesError },
          { data: skillsData, error: skillsError }
        ] = await Promise.all([
          supabase.from('settings').select('*').maybeSingle(),
          supabase.from('projects').select('*').order('id', { ascending: true }),
          supabase.from('experiences').select('*').order('id', { ascending: true }),
          supabase.from('skills').select('*').order('id', { ascending: true })
        ]);

        if (settingsError || projectsError || experiencesError || skillsError) {
          console.error('Database fetch error details:', {
            settingsError,
            projectsError,
            experiencesError,
            skillsError
          });
          throw new Error('Error fetching data from Supabase');
        }

        if (isMounted) {
          // Format setting data JSON arrays if needed (Supabase parses JSONB automatically)
          setData({
            settings: settingsData,
            projects: projectsData || [],
            experiences: experiencesData || [],
            skills: skillsData || [],
          });
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Supabase fetch error:', err);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchAllData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
